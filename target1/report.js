$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/feature.feature");
formatter.feature({
  "line": 1,
  "name": "To test the add customer functionlaity",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "To test the submit button1",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@oneway"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user is in Abhibus home pag",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user fill in the journey details \"\u003cSource\u003e\",\"\u003cDestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user search the buses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The customer should see the Source and destination",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;",
  "rows": [
    {
      "cells": [
        "Source",
        "Destination"
      ],
      "line": 11,
      "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;1"
    },
    {
      "cells": [
        "Chen",
        "Coim"
      ],
      "line": 12,
      "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3427436460,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To test the submit button1",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@oneway"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "The user is in Abhibus home pag",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user fill in the journey details \"Chen\",\"Coim\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user search the buses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The customer should see the Source and destination",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.the_user_is_in_Abhibus_home_pag()"
});
formatter.result({
  "duration": 9852752920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chen",
      "offset": 38
    },
    {
      "val": "Coim",
      "offset": 45
    }
  ],
  "location": "Homepage.the_user_fill_in_the_journey_details(String,String)"
});
formatter.result({
  "duration": 9629622655,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.the_user_search_the_buses()"
});
formatter.result({
  "duration": 7278671150,
  "status": "passed"
});
formatter.match({
  "location": "validationstep.the_customer_should_see_the_Source_and_destination()"
});
formatter.result({
  "duration": 80608496,
  "status": "passed"
});
formatter.after({
  "duration": 27965,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "To test the submit button1",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@oneway"
    },
    {
      "line": 13,
      "name": "@return"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "The user is in Abhibus home pag",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user fill in the journey details \"\u003cSource\u003e\",\"\u003cDestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Select return date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user search the buses",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The customer should see the Source and destination and return",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;",
  "rows": [
    {
      "cells": [
        "Source",
        "Destination"
      ],
      "line": 23,
      "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;1"
    },
    {
      "cells": [
        "Chen",
        "Coim"
      ],
      "line": 24,
      "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2375113983,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To test the submit button1",
  "description": "",
  "id": "to-test-the-add-customer-functionlaity;to-test-the-submit-button1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@return"
    },
    {
      "line": 13,
      "name": "@oneway"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "The user is in Abhibus home pag",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user fill in the journey details \"Chen\",\"Coim\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Select return date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user search the buses",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The customer should see the Source and destination and return",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.the_user_is_in_Abhibus_home_pag()"
});
formatter.result({
  "duration": 7914207788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chen",
      "offset": 38
    },
    {
      "val": "Coim",
      "offset": 45
    }
  ],
  "location": "Homepage.the_user_fill_in_the_journey_details(String,String)"
});
formatter.result({
  "duration": 9565956460,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.select_return_date()"
});
formatter.result({
  "duration": 3306043540,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.the_user_search_the_buses()"
});
formatter.result({
  "duration": 7577543717,
  "status": "passed"
});
formatter.match({
  "location": "validationstep.the_customer_should_see_the_Source_and_destination_and_return()"
});
formatter.result({
  "duration": 135889557,
  "status": "passed"
});
formatter.after({
  "duration": 20177,
  "status": "passed"
});
});