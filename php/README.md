# lectii php si mysql

## conectarea la fisiere cu notepad++
[video](https://youtu.be/xqWJPPZ0FZU?t=98)
Host Name: files.000webhost.com
Username: free123456
Password: free123456

fisierele cu php se afla in folderul: public_html/php

## conectarea la fisiere cu filezila
[video](https://www.youtube.com/watch?v=O3DudpEMPiY)
la fel ca mai sus

## conectarea la baze de date phpmyadmin (in browser)
link: https://databases.000webhost.com
user: id2733849_ion
pass: 123456
db-name: id2733849_test

## lucrul cu phpmyadmin
[adaug tabele](https://www.youtube.com/watch?v=SV6uwDvufLs)
[adaug date in tabele](https://www.youtube.com/watch?v=IV6vGuHcQy8)

## conectarea la baza de date din fisier cu php
site exemplu: https://free123456.000webhostapp.com/php
[lectii romana video](https://www.youtube.com/watch?v=QSGVwlo__fs&index=25&list=PLRlcs-KgbzEdWyMgQ-vPiS70CaYC5ssBa)

tutorial link: https://www.w3schools.com/php/php_mysql_connect.asp


```
<?php
$servername = "localhost";
$username = "id2733849_ion";
$password = "123456";
$dbname = "id2733849_test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully<br/>";

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();


?>

```



