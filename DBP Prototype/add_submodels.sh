for file in submodel_instances/*.json
do
  curl -X POST http://localhost:8081/submodels \
  -H "Content-Type: application/json" \
  -d @$file
done

curl -X POST http://localhost:8081/submodels \
-H "Content-Type: application/json" \
-d @aas_instances/*.json


curl -X POST http://localhost:8081/submodels \
-H "Content-Type: application/json" \
-d @aas_model/*.json