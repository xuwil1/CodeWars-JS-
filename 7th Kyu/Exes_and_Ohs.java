/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

public class XO {
  
  public static boolean getXO (String str) {
    //if there is equal amount then count will be 0
    int count=0;
    for(int i=0;i<str.length();i++){
      //x  will make increase count
      if(Character.toLowerCase(str.charAt(i))=='x'){
        count++;
      }
      //o will decrease count
      if(Character.toLowerCase(str.charAt(i))=='o'){
        count--;
      }
    }
    //by end of loop count should be 0 to return even amount of x and o's  
    if(count==0){
      return true;
    }else{ 
      return false;
    }
    
  }
}
