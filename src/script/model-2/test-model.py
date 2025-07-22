import json
import sys
import joblib
import pandas as pd
import numpy as np

input_inner = json.loads(sys.argv[1])
# print(f"Input received: {input_inner}")

model = joblib.load('./src/script/model-2/random_forest_model.pkl')
le = joblib.load('./src/script/model-2/label_encoder.pkl')

df = pd.read_csv('./src/script/model-2/career-mapping.csv')
X = df.drop(columns=['Role'])
y = df['Role']

def predict_role_from_frontend(input_array):
    if len(input_array) != 27:
        return "Error: Input must contain exactly 27 elements."

    # First 17 are technical/soft skill ratings (1-7 scale) – use directly
    tech_soft_skills = input_array[:17]

    # Last 10 are psychological/values – scale 1-7 to 0–1
    psych_values = [(val - 1) / 6 for val in input_array[17:]]  # Normalize 1-7 to 0.0–1.0

    full_input = np.array(tech_soft_skills + psych_values).reshape(1, -1)
    # print("Input for prediction:", full_input)
    prediction = model.predict(pd.DataFrame(full_input, columns=X.columns))
    predicted_role = le.inverse_transform(prediction)[0]
    print(predicted_role)

    return predicted_role


predict_role_from_frontend(input_inner)
sys.stdout.flush()