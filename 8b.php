<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sort Student Records</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 20px; }
        table { margin: auto; border-collapse: collapse; width: 80%; }
        th, td { padding: 10px; border: 1px solid #ddd; }
        th { background-color: #f4f4f4; }
    </style>
</head>
<body>
    <h1>Sorted Student Records</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
        </tr>
       <?php
$conn = new mysqli("127.0.0.1:3307", "root", "", "students124");
$result = $conn->query("SELECT * FROM students124 ORDER BY name ASC");
foreach ($result as $row) {
    echo "<tr>
            <td>$row[id]</td>
            <td>$row[name]</td>
            <td>$row[grade]</td>
          </tr>";
}
$conn->close();
?>
    </table>
</body>
</html>
