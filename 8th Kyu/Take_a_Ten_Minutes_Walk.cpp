/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, 
return you to your starting point. 
Return false otherwise.
Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).
*/

#include<vector>
#include <iostream>
using namespace std;

bool isValidWalk(std::vector<char> walk) {
  //your code here
  int start=0;
  int size=walk.size();
  //cout<<"size: "<<size<<endl;
  if(size!=10){
    return false;
  }
  for(int i=0;i<size;i++){
    if(walk[i]=='n'){
      start+=1;
    }else if(walk[i]=='s'){
      start-=1;
    }else if(walk[i]=='e'){
      start+=2;
    }else if(walk[i]=='w'){
      start-=2;
    }
  }
  //cout<<"start value: "<< start<<endl;
  if(start==0){
    //cout<<"TRUE"<<endl;
    return true;
  }else{
    //cout<<"FALSE"<<endl;
    return false;
  }
}
