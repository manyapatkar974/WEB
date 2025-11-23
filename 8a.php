<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Visitor Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        h1 {
            color: black;
        }
    </style>
</head>
<body>
   <?php
$file = 'counter.txt';
$count = (int) @file_get_contents($file) + 1;
file_put_contents($file, $count);
?>
    <h1>Visitor Counter</h1>
    <p>Number of Visitors: <strong><?php echo $count; ?></strong></p>
</body>
</html>
