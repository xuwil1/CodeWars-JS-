/*
We need a function that can transform a number into a string.
What ways of achieving this do you know?
Examples:
123 --> "123"
999 --> "999"
*/

#include <string>
#include <iostream>
using namespace std;
  
std::string number_to_string(int num) {
  return to_string(num);
}
