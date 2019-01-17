module.exports = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 5,
      "maxItems": 15,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "chance": "guid"
          },
          "username": {
            "type": "string",
            "faker": "internet.email"
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "avatar": {
            "type": "string",
            "faker": "image.avatar",
          },
          "country": {
            "type": "string",
            "faker": "address.country",
          }
        },
        "required": ["id", "name", "avatar", "username", "country"]
      },
    },
  },
  "required": ["users"],
};
