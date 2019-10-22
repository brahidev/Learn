<?php

final class preparedSQL {
    const insertUser = "INSERT INTO users (user_name, user_mail, user_password) VALUES (?, ?, ?)";
}