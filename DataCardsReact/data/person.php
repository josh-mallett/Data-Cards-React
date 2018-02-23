<?php
  class Person {
    public $name;
    public $age;
    public $city;
    public $state;
    public $company;
    public $picture;

    function __construct($name, $age, $city, $state, $company, $picture) {
      $this->name = $name;
      $this->age = $age;
      $this->city = $city;
      $this->state = $state;
      $this->company = $company;
      $this->picture = $picture;
    }
  }
?>
