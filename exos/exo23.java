package exos;

public class exo23 {

public static void main(String[] args) {		
	
int []	tab = new int [10];
int nbElement = 1;
int indice =0;
tab[0]=2;

while(nbElement<10)	{
	tab[nbElement] = tab[nbElement-1]*2;
	nbElement++;
}	
while (indice<nbElement) {
	System.out.println(tab[indice]);
	indice++;
}
}}