# Node Server

## API Docs

### Create a job Posting

```json
route : 'api/v1/job/create'
request: POST

body: {
    "title": "Full Stack Developer",
    "company": "Google",
    "location": "Remote",
    "description": "As a Full Stack Developer at [Your Company Name], you will play a pivotal role in the end-to-end development of our applications. You'll work on both the client and server sides, collaborating with cross-functional teams to deliver innovative solutions. If you're an adaptable and creative problem solver, this is the opportunity for you.",
    "applicationDeadline": "2023-11-30",
    "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
}

response:
{
    "result": {
        "jobId": "6536920b100cf10b1c79eb61",
        "message": "Job posting created successfully!"
    },
    "status": "SUCCESS"
}
```

### Get list of jobs

```json
route : '/api/v1/job'
request: Get

response:
{
    "result": [
        {
            "_id": "653691b2100cf10b1c79eb5b",
            "title": "Mobile App Developer",
            "company": "Google",
            "location": "Bangalore",
            "description": "As a Mobile App Developer at [Your Company Name], you will play a crucial role in the development, testing, and maintenance of mobile applications. You'll work closely with our team of designers and other developers to create apps that deliver exceptional user experiences. You should be passionate about staying up-to-date with the latest trends in mobile app development and have a strong desire to innovate and push the boundaries of what's possible in the mobile space.",
            "applicationDeadline": "2023-11-30T00:00:00.000Z",
            "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "postedAt": "2023-10-23T15:30:58.856Z",
            "__v": 0
        },
        {
            "_id": "653691e2100cf10b1c79eb5e",
            "title": "Backend Developer",
            "company": "Google",
            "location": "Remote",
            "description": "As a Backend Developer at [Your Company Name], you will play a vital role in designing, developing, and maintaining the server-side components of our applications. Your responsibilities will include implementing efficient and secure APIs, optimizing database queries, and collaborating with our front-end developers to deliver seamless user experiences. If you thrive in a collaborative and innovative environment, we'd love to have you on board.",
            "applicationDeadline": "2023-11-30T00:00:00.000Z",
            "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "postedAt": "2023-10-23T15:31:46.066Z",
            "__v": 0
        },
        {
            "_id": "6536920b100cf10b1c79eb61",
            "title": "Full Stack Developer",
            "company": "Google",
            "location": "Remote",
            "description": "As a Full Stack Developer at [Your Company Name], you will play a pivotal role in the end-to-end development of our applications. You'll work on both the client and server sides, collaborating with cross-functional teams to deliver innovative solutions. If you're an adaptable and creative problem solver, this is the opportunity for you.",
            "applicationDeadline": "2023-11-30T00:00:00.000Z",
            "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            "postedAt": "2023-10-23T15:32:27.125Z",
            "__v": 0
        }
    ],
    "status": "Success"
}
```

### Get single job details

```json
route : '/api/v1/job/:jobId'
request: Get

response:
{
    "result": {
        "_id": "653691b2100cf10b1c79eb5b",
        "title": "Mobile App Developer",
        "company": "Google",
        "location": "Bangalore",
        "description": "As a Mobile App Developer at [Your Company Name], you will play a crucial role in the development, testing, and maintenance of mobile applications. You'll work closely with our team of designers and other developers to create apps that deliver exceptional user experiences. You should be passionate about staying up-to-date with the latest trends in mobile app development and have a strong desire to innovate and push the boundaries of what's possible in the mobile space.",
        "applicationDeadline": "2023-11-30T00:00:00.000Z",
        "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "postedAt": "2023-10-23T15:30:58.856Z",
        "__v": 0
    },
    "status": "Success"
}

```

### Apply for job

```json
route : '/api/v1/job/save/:userId/:jobId'
request: Get

response:
{
    "result": {
        "id": "65366b6b1b3116ffeb6895fd",
        "message": "Job saved successfully!"
    },
    "status": "SUCCESS"
}

```

### Get saved jobs

```json
route : '/api/v1/job/saved/:userId'
request: Get

response:
{
    "result": [
        {
            "_id": "6536932f100cf10b1c79eb68",
            "userId": "65354a2b8694dde110c84e36",
            "jobId": {
                "_id": "6536920b100cf10b1c79eb61",
                "title": "Full Stack Developer",
                "company": "Google",
                "location": "Remote",
                "description": "As a Full Stack Developer at [Your Company Name], you will play a pivotal role in the end-to-end development of our applications. You'll work on both the client and server sides, collaborating with cross-functional teams to deliver innovative solutions. If you're an adaptable and creative problem solver, this is the opportunity for you.",
                "applicationDeadline": "2023-11-30T00:00:00.000Z",
                "companyLogo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                "postedAt": "2023-10-23T15:32:27.125Z",
                "__v": 0
            },
            "savedAt": "2023-10-23T15:37:19.227Z",
            "__v": 0
        }
    ],
    "status": "Success"
}


```

### Register User

```json
route : '/api/v1/auth/register'
request: Post

body:
{
    "email":"sumith@gmail.com",
    "password":"123456",
    "phone":"1234567890",
    "name":"Sumith"
}

response:
{
    "result": {
        "userId": "65366b431b3116ffeb6895f7",
        "message": "User registered successfully!"
    },
    "status": "SUCCESS"
}


```

### User Login

```json
route : '/api/v1/auth/login'
request: Post

body:
{
    "email": "sumith@gmail.com",
    "password": "123456"
}
response:
{
    "result": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTM2NmI0MzFiMzExNmZmZWI2ODk1ZjciLCJpYXQiOjE2OTgwNjUyMjZ9.nmi7k19xvWhRpSWolKz-MUCXUXJ-IJAbSrSSHQ9WRe4"
    },
    "status": "Success"
}


```
