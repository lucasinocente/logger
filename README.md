# Zenvia Talker

## To install
`npm install`

## To run
`npm start`

You will need a env file if you wanna control the time for each log, create a .env and use `LOG_INTERVAL`.

Example:
```
LOG_INTERVAL=1000
```

## Deploy

```

kubectl delete deployment,ingress,configmaps,service zenvia-talker --context=kubernetes-hlg

Create:
kubectl create -f k8s-config-prd.yaml --context=kubernetes-hlg
kubectl create -f k8s-ingress-prd.yaml --context=kubernetes-hlg
kubectl create -f k8s-deployment.yaml --context=kubernetes-hlg
kubectl create -f k8s-service.yaml --context=kubernetes-hlg

kubectl get pods  --context=kubernetes-hlg

```