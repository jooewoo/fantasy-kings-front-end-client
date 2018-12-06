# sh curl-scripts/json/sign-in.sh

curl 'https://guarded-taiga-82563.herokuapp.com/sign-in' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
