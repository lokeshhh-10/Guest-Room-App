<h1 align="center">
  Guest room application
  
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  <br>
</h1>
<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#installation-guide">Installation Guide</a> •
  <a href="#screenshots">Screenshots</a> •
</p>

## ℹ️Introduction
Guest room Application using MERN Stack.

### Overview :
The Guest Room Application is a modern web solution designed to streamline the management and booking of guest rooms. This application provides a user-friendly interface for guests to view, book, and manage room reservations efficiently

### Technology Stack :

1.  ExpressJS for server library.
2.  Node.js for Environment.
3.  React.js for developing User Interface
4.  MongoDB for database design


## 📃Installation Guide

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/lokeshwaran26/CartRabbit-Project.git
```

### Client side :
```bash
# Go into the repository
$ cd client
# Install dependencies
$ npm install
# Run the app
$ npm run dev
```

### Server side :
```bash
# Go into the repository
$ cd server
# Install dependencies
$ npm install
# Run the app
$ npm start
```
 
### Credentials:
#### Sample Email and Password you can also create in signup page
##### Email : sample1@gmail.com
##### Password : sample1@123

## ⚡API

### **Authentication Endpoints**

| HTTP Verb   | Endpoint                    | Description                        |               
| :---------- | :-----------------------    |:---------------------------------- |              
| `POST`      | `auth/login`                |  User Login                        |  
| `POST`      | `auth/register`             |  User Register                     |     

### **Room Endpoint**

| HTTP Verb   | Endpoint                    | Description                        |
| :---------- | :------------------------   |:---------------------------------  |
| `POST`       | `listing/create`           |  create Rooms                      |
| `GET`       | `listing/:listingId`        |  Returns Rooms                     |

### 👤**User Data Example**

#### USER Schema :
```json
{"_id":{"$oid":"66a265f160ee880589ca3724"},
"firstName":"Lokeshwaran",
"email":"loki@gmail.com",
"password":"$2a$10$0KkEgjxbqWrVkGY43JHQiOHlrS5WlcEHwEMypqtiDUn1yl79g1ZUi"
,"tripList":[],
"wishList":[],
"propertyList":[],
"reservationList":[],
"createdAt":{"$date":{"$numberLong":"1721918961939"}},
"updatedAt":{"$date":{"$numberLong":"1721918961939"}},
"__v":{"$numberInt":"0"}
}
```
#### Listings Schema :
```json
{"_id":{"$oid":"66a67fe365ee70ee9ca62f6e"},
"creator":{"$oid":"66a2697b60ee880589ca3727"},
"category":"Iconic cities",
"type":"An entire place",
"streetAddress":"12/34, Maruthi Nagar, Saravanampatti ",
"aptSuite":"Suite 456",
"city":"Coimbatore",
"province":"Tamil Nadu",
"country":"India",
"guestCount":{"$numberInt":"6"},
"bedroomCount":{"$numberInt":"3"},
"bedCount":{"$numberInt":"3"},
"bathroomCount":{"$numberInt":"3"},
"amenities":[],
"listingPhotoPaths":[],
"title":"Cozy 3-Bedroom Apartment in the Heart of Downtown Springfield",
"description":"Welcome to your new home! This cozy 2-bedroom, 1-bathroom apartment is located in the vibrant downtown area of Springfield. With modern amenities, a spacious layout, and stunning city views, this apartment is perfect for young professionals, couples, or small families. Enjoy the convenience of being close to shopping centers, restaurants, public transportation, and parks.",
"highlight":"Prime Downtown Location Modern Amenities Spacious Layout",
"highlightDesc":"Prime Downtown Location: Situated in the heart of Springfield, you'll be just steps away from all the action. Easy access to public transportation and major highways.\r\n\r\nModern Amenities: The apartment features stainless steel appliances, in-unit laundry, central air conditioning, and high-speed internet.",
"price":{"$numberInt":"999"},
"createdAt":{"$date":{"$numberLong":"1722187747273"}},
"updatedAt":{"$date":{"$numberLong":"1722187747273"}},
"__v":{"$numberInt":"0"},"stayCount":{"$numberInt":"15"}}

```

## 🪟Screenshots
### **Home Page**
> * Home page.
>
>   ![1](https://github.com/user-attachments/assets/49a509e5-b6d6-4af6-8f72-1bcd5ad787a0)
>


### **Login - Signup Pages**
> * User can login on this page.
>
>   ![2](https://github.com/user-attachments/assets/fe22a3a8-80ee-40ed-a47b-a7b8d1d0deb0)

> * User can signup on this page.
>
>   ![3](https://github.com/user-attachments/assets/5fc77950-cbdf-4462-9484-9cc0db8110fc)
>
### **User Pages**
> * User can login on this page.
>
>   ![4](https://github.com/user-attachments/assets/173a86d5-e1f6-4932-9ebb-1fc1372ca206)

> * User can signup on this page.
>
>   ![5](https://github.com/user-attachments/assets/71416b44-e55b-4a1e-b0d3-c20efe4dcdaf)
>
### **Creating Rental Rooms**
> * Host can create a rooms*
>   
>   ![5](https://github.com/user-attachments/assets/187f6354-6cbf-4ea5-86a0-1701aa267fbf)
>
### **Room Details**
> * Booking page of the room*
>   
>   ![5](https://github.com/user-attachments/assets/89407f47-d319-40c1-af1b-3a7cada930e4)


