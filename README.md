<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pure JS Form</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            padding: 40px;
        }

        .form-container {
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 24px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .form-title {
            margin-bottom: 20px;
            font-size: 24px;
        }

        .form-group {
            margin-bottom: 16px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 600;
        }

        input,
        select,
        textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            outline: none;
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: #0078ff;
        }

        button {
            width: 100%;
            padding: 12px;
            border: none;
            background: #0078ff;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            opacity: 0.9;
        }

        .result {
            margin-top: 20px;
            padding: 10px;
            background: #f7f7f7;
            border-radius: 6px;
        }
    </style>
</head>
<body>

<div id="app"></div>

<script>
const app = document.getElementById("app");

const container = document.createElement("div");
container.className = "form-container";

container.innerHTML = `
    <h2 class="form-title">Student Registration</h2>

    <form id="studentForm">

        <div class="form-group">
            <label>Name</label>
            <input type="text" id="name" required>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" id="email" required>
        </div>

        <div class="form-group">
            <label>Course</label>
            <select id="course">
                <option>React</option>
                <option>Node.js</option>
                <option>Python</option>
            </select>
        </div>

        <div class="form-group">
            <label>Message</label>
            <textarea id="message" rows="4"></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>

    <div id="result" class="result"></div>
`;

app.appendChild(container);

document
    .getElementById("studentForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            course: document.getElementById("course").value,
            message: document.getElementById("message").value
        };

        document.getElementById("result").innerHTML =
        `
            <h3>Submitted Data</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

        console.log(data);
    });
</script>

</body>
</html>
