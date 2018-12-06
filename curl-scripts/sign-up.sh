# sh curl-scripts/json/sign-in.sh

curl 'https://git.heroku.com/guarded-taiga-82563.git/sign-up' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
