<?php
  require 'person.php';

  $searchTerm = strtolower($_GET['search']);

  $people = array(
    new Person("Marlon Ortiz", 21, "Lafayette", "Louisiana", "AT&T", "./content/images/marlon.jpg"),
    new Person("Jan Mendez", 25, "Boise", "Idaho", "Google", "./content/images/jan.jpg"),
    new Person("Stephanie Mendoza", 43, "Dallas", "Texas", "Indeed", "./content/images/stephanie.jpg"),
    new Person("Amelia Jacobs", 36, "Minneapolis", "Minnesota", "Intuit", "./content/images/amelia.jpg"),
    new Person("Erma Flores", 29, "San Jose", "California", "Paypal", "./content/images/erma.jpg"),
    new Person("Tabitha Brewer", 22, "Cleveland", "Ohio", "Zillow", "./content/images/tabitha.jpg"),
    new Person("Yvonne Diaz", 21, "Seattle", "Washington", "Amazon", "./content/images/yvonne.jpg"),
    new Person("Arturo Holloway", 25, "Chicago", "Illinois", "Adobe", "./content/images/arturo.jpg"),
    new Person("Charlene Mcbridez", 27, "Denver", "Colorado", "Microsoft", "./content/images/charlene.jpg"),
    new Person("Elias Morton", 33, "Tampa", "Florida", "Zendesk", "./content/images/elias.jpg")
  );
 
  if ($searchTerm == "" || $searchTerm == NULL) {
    echo json_encode($people);
  }
  else {
    $results = array();
  
    foreach($people as $person) {
      if (strpos(strtolower($person->name), $searchTerm) > -1 || 
          strpos(strtolower($person->city), $searchTerm) > -1 || 
          strpos(strtolower($person->state), $searchTerm) > -1 || 
          strpos(strtolower($person->company), $searchTerm) > -1) {
        array_push($results, $person);
      }
    }

    echo json_encode($results);
  }
?>
