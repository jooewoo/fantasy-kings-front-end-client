curl "https://git.heroku.com/guarded-taiga-82563.git/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

echo
