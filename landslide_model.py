import numpy as np
import geopandas as gpd
from sklearn.model_selection import GroupKFold, GridSearchCV
from sklearn.svm import SVC
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import joblib

data = gpd.read_file("your_spatial_data.xlsx")
X = data.drop(columns=["target", "geometry", "county"])  # Features
y = data["target"]  # Target labels
counties = data["county"]  # County labels

n_splits = 5
group_kfold = GroupKFold(n_splits=n_splits)

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('svc', SVC())
])

param_grid = {
    'svcC': [0.1, 1, 10],
    'svckernel': ['rbf', 'poly'],
    'svc__gamma': ['scale', 'auto']
}

grid_search = GridSearchCV(
    estimator=pipeline,
    param_grid=param_grid,
    cv=group_kfold.split(X, y, groups=counties),
    scoring='accuracy',
    verbose=2,
    n_jobs=-1
)

grid_search.fit(X, y)

best_model = grid_search.bestestimator
print("Best Parameters:", grid_search.bestparams)

joblib.dump(best_model, "landslide_model.pkl")
print("Model saved as landslide_model.pkl")