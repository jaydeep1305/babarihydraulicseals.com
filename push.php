<?php
    //for push
    $actual_link = "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    //$actual_link = "hadono.com/push.php";
    $actual_link = str_replace("/push.php","",$actual_link);
    $actual_link = explode("/",$actual_link);
    $domain = array_pop($actual_link);
    echo $domain;
    $server_or_local = "Local";
    if($actual_link == $domain)
    {
        $server_or_local = "Server";
    }

    $time = time();
    $time = date("d-M-Y-H-m",$time);
    echo shell_exec("git add . --force");
    echo shell_exec("git commit -m \"$server_or_local($domain) : $time\"");
    echo shell_exec("git push");
?>