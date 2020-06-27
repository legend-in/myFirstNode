# Online-store-api

## API List

### Testing Host: https://docs.google.com/document/d/1oDCH0dDPF0HOCS5UJFkT2HE583hVSSmdFrJoiw2miLU/edit?usp=sharing

---
For Frontend: 

#### Note: For testing purpose now. If the API is `user required`, you need to set your add {user: user._id} in the request headers as below:
* **Request Headers:**
```
headers: {
  user: user._id     //YOUR user._id RETURNED BY THE LOGIN OR SIGNUP
}

// testing account
{
  user: {
    _id: "5ef007532dc54ac31e924d26",
    wechat_id: "allentest1",
    wechatName: "password"
  }
}
```
#### Note: For prod purpose later on. If the API is `token required`, you need to set your jwt token (or whatever passport-wechat provides) in the header as below:
```
header: {
  Authorization: Bearer JSON_WEB_TOKEN_STRING.....
}
```

### GET `/api/v1/item`
* **Description:** get the list of all items, each item only contains the info for the main page.
* **Response**
```
{
  "success": true,
  "data": [
    type: Array of Objects<item>,
    each element: 
    {
        "timeStamps": {
            "createdAt": String,
            "lastEditedAt": String,
            "createdBy": String,
            "lastEditedBy": String
        },
        "img": String,
        "isInStock": Boolean,
        "sold": Number,
        "_id": String,
        "name": String,
        "price": Number,
        "origPrice": Number,
        "__v": 0,
        "details": String
    },
  ],
  "error": null,
  "message": null
}
```

### GET `/api/v1/item/:id`
* **Description:** get the detail of the item, id is each specific item._id returned from the above api.
* **Response**
```
{
  "success": true,
  "data": {
      "timeStamps": {
          "createdAt": String,
          "lastEditedAt": String,
          "createdBy": {
              "_id": String,
              "email": String,
              "name": String,
              "phone": Number,
              "department": String,
              "__v": 0
          },
          "lastEditedBy": {
              "_id": String,
              "email": String,
              "name": String,
              "phone": Number,
              "department": String,
              "createdBy": String,
              "__v": 0
          }
      },
      "img": String,
      "isInStock": Boolean,
      "sold": Number,
      "_id": String,
      "name": String,
      "price": Number,
      "origPrice": Number,
      "__v": 0,
      "details": {
          "description": String,
          "descriptionImg": String,
          "img": [         // Array of Strings
              String,
              String
          ],
          "_id": String,
          "__v": 0
      }
  },
  "error": null,
  "message": null
}
```

### GET `/api/v1/login`
* **Description:** get the login page, should be used to redirect to wechat login page/dialogue. For testing now, get the POST login request details.
* **Response**
```
{
    "success": true,
    "data": {
        "Method": "POST",
        "url": "/api/v1/login",
        "body": {
            "user": {
                "wechat_id": {
                    "required": true,
                    "unique": true
                },
                "wechatName": {
                    "required": true
                }
            }
        }
    },
    "error": null,
    "message": "It's a mocking login api here, provide the above data for mocking a login request"
}
```

### POST `/api/v1/login`
* **Description:** login, should be used to send the localStorage.token or wechat login code for user login purpose. For testing now, POST to get the testing account user info.
* **Response**
```
{
    "success": true,
    "data": {
        "_id": "5ef007532dc54ac31e924d26",
        "wechat_id": "allentest1",
        "wechatName": "password"
    },
    "error": null,
    "message": "Use this mocking user, put _id as the value for req.headers.user"
}
```

### GET `/api/v1/signup`
* **Description:** get the signup page, should be used to redirect to wechat signup permission request page/dialogue. For testing now, get the POST signup request details.
* **Response**
```
{
    "success": true,
    "data": {
        "Method": "POST",
        "url": "/api/v1/signup",
        "body": {
            "user": {
                "wechat_id": {
                    "required": true,
                    "unique": true
                },
                "wechatName": {
                    "required": true
                }
            }
        }
    },
    "error": null,
    "message": "It's a mocking signup api here, provide the above data for mocking a login request"
}
```

### POST `/api/v1/signup`
* **Description:** signup, should be used to send the wechat login code for the 1st time user signup purpose. For testing now, POST to create a user.
* **Request body:**
```
{
    "user": {
        "wechat_id": String,  //must be unique
        "wechatName": String 
    }
}
```
* **Response**
```
{
    "success": true,
    "data": {
        "_id": String
    },
    "error": null,
    "message": "Signup successfully!"
}
```





### GET `/api/v1/user` (token/user required)
* **Description:** get user info
* **Request Headers:**
```
headers: {
  user: user._id     //YOUR user._id RETURNED BY THE LOGIN OR SIGNUP
}
```
* **Response**
```
{
    "success": true,
    "data": {
        "hasDefaultAddress": Boolean,
        "order": Array of Strings,
        "createdAt": String,
        "_id": String,
        "wechat_id": String,
        "wechatName": String,
        "__v": 0,
        "address": {
            "_id": String,
            "userId": String,
            "provinceCityDistrict": String,
            "consignees": String,
            "telephone": Number,
            "detailAddress": String,
            "__v": 0
        }
    },
    "error": null,
    "message": null
}
```

### GET `/api/v1/user/order` (token/user required)
* **Description:** get the list of user's orders
* **Request Headers:**
```
headers: {
  user: user._id     //YOUR user._id RETURNED BY THE LOGIN OR SIGNUP
}
```
* **Response**
```
{
    "success": true,
    "data": Array of Objects<order> 
    "error": null,
    "message": null
}
```

### POST `/api/v1/user/order` (token required)
* **Description:** create an order. 
- For the returned user info, when its field `hasDefaultAddress` is true, the `user.address` is most recently set up default address. Otherwise, it has never set up a default address before, then the request body must have "address" field as below. 
- When `req.body.address.isDefault` is true, the newly entered address will replace the user's default address `user.address`.
- When `req.body.address.isDefault` is false or not sent, it will not change user's default address. 
* **Request Headers:**
```
headers: {
  user: user._id     //YOUR user._id RETURNED BY THE LOGIN OR SIGNUP
}
```
* **Request body:**

```
{
    "order": {
        "items": [{                // Array of Objects<item>
            "itemId": String,
            "amount": Number
        }, {
            "itemId": String,
            "amount": Number
        }],
        "totalPrice": Number
    },
    // newly eneterd address
    "address": {                   // optional, must have if using newly entered address
        "provinceCityDistrict": String,
        "consignees": String,
        "telephone": Number,
        "detailAddress": String,
        "isDefault": Boolean       // optional, flag to replace the user's default address
    }
}
```
* **Response**
```
{
    "success": true,
    "data": {
        "timeStamps": {
            "lastEditedBy": String,
            "lastEditedAt": String,
            "createdAt": String
        },
        "status": "PENDING",
        "isRefundable": true,
        "_id": String,
        "uuid": String,
        "userId": String,
        "items": [.             // Array of Object<item>
            {
                "amount": Number,
                "itemId": String,
                "name": String,
                "img": String,
                "price": Number,
                "origPrice": Number
            },
            {
                "amount": Number,
                "itemId": String,
                "name": String,
                "img": String,
                "price": Number,
                "origPrice": Number
            }
        ],
        "totalPrice": Number,
        "address": {
            "_id": "String",
            "userId": "String",
            "provinceCityDistrict": "String",
            "consignees": "String",
            "telephone": Number,
            "detailAddress": "String",
            "__v": 0
        },
        "__v": 0
    },
    "error": null,
    "message": null
}

```

### POST `/api/v1/user/order/:id` (token required)
* **Description:** change order status to "REFUND REQUESTED", add/update the refundNote if it's sent, id is the specific order._id. 
- Only use this when the `order.isRefundable` is true
* **Request Headers:**
```
headers: {
  user: user._id     //YOUR user._id RETURNED BY THE LOGIN OR SIGNUP
}
```
* **Request body:**

```
{
    "user": {
        "_id": String
    },
    "orderStatus": "REFUND REQUESTED"，
    “refundNote”: String            // optional
}
```
* **Response**
```
{
    "success": true,
    "data": {
        "timeStamps": {
            "createdAt": String,
            "lastEditedAt": String,
            "lastEditedBy": "user"
        },
        "status": "REFUND REQUESTED",
        "isRefundable": false,
        "refundNote": String,       // optional return depends on the order
        "items": [.             // Array of Object<item>
            {
                "amount": Number,
                "_id": String,
                "itemId": String
            },
            {
                "amount": Number,
                "_id": String,
                "itemId": String
            }
        ],
        "_id": String,
        "uuid": String,
        "userId": String,
        "totalPrice": 12345,
        "address": String,
        "__v": 0
    },
    "error": null,
    "message": null
}
```
