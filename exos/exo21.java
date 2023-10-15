package tests;
	
import java.util.Scanner;
public class exo21 {

		public static void main(String[] args) {

		Scanner clavier = new Scanner(System.in);
		int i =0;
		int justeprix=10;
		int proposition=  0;
		do {
			System.out.println("entrez un nombre");
		int proposition3 = Integer.parseInt(clavier.nextLine());

		    if (proposition3>justeprix){
		System.out.println("c'est moins");
		}
		    else if(proposition3<justeprix){
		    	System.out.println("c'est plus");
		    }  
		    else {
		    System.out.println("c'est gagné !");
		    proposition=10;	
		    }
		    i++;
		}
		while (proposition!=10); 
		}
		}
	
	
	
	
	
	
	
	
	
	
	

