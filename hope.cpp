#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;

string fname[100];
string sname[100];
string matricno[100];
string csc201[100];
string csc205[100];
string mth201[100];
string mth203[100];
string gst201[100];
string gpa[100];

char option;


void victor()
{
	int i=0;
int j=0;
	string line;
   ifstream mFile("stud1.csv");   
    if(mFile.is_open()) 
    {
        while(mFile >> line)
        {
        		switch(i)
					{
						case 1:
							fname[j] = line;
							break;
							
						case 2:
							sname[j] = line;
							break;
							
						case 3:
							matricno[j] = line;
							break;
							
						case 4:
							csc201[j] = line;
							break;
							
						case 5:
							csc205[j] = line;
							break;
							
						case 6:
							mth201[j] = line;
							break;
							
						case 7:
							mth203[j] = line;
							break;
							
						case 8:
							gst201[j] = line;
							break;
							
						case 9:
							gpa[j] = line;
							break;
							
					i++;
					
			}     
			if(i==9)
			{i=0;
			j+=1;
				   }       
        }
        mFile.close();
    }
	
	
}

int main()
{
victor();
 cout<<"***********Welcome to the Sytem***********\n";
 main:
	cout<<"***************The Main Menu**************\n";
	cout<<"1. To SEARCH for Student's Result__________________Press F\n";
	cout<<"2. To UPDATE a Student's Result____________________Press U\n";
	cout<<"3. To SAVE a Student's Result to file______________Press P\n";
	cout<<"4. To VIEW ALL Student's Result____________________Press A\n";
	cout<<"5. To EXIT the program_____________________________Press E\n";
	
	cout<<"Please enter an option.\n\n";
	cin>>option;
	
	switch(option)
	{
		case 'F':
		case 'f':
			{
				int matric;
				cout<<"SEARCH RECORDS\n";
				/*cout<<"Enter Student's Matriculation Number: SST/2019/000";
				cin>>matric;
				//cout<<matric;*/
				string matric1 = "SST/2019/0005"; //+  to_string(matric);
				//cout<<matric1;
				int k, o;
				
				for(o = 0; o<12; o++)
				{
				for(k = 0; k<sizeof(matricno[0]); k++)
				{
					if(matricno[k] == matric1)
						{
							cout<<"Student found:\n";
							break;
							cout<<"First Name: "<<fname[k];
							cout<<"\nSurname: "<<sname[k];
							cout<<"\nMatriculation Number: "<<matricno[k];
							cout<<"\nCSC 201 score: "<<csc201[k];
							cout<<"\nCSC 205 score: "<<csc205[k];
							cout<<"\nMTH 201 score: "<<mth201[k];
							cout<<"\nMTH 203 score: "<<mth203[k];
							cout<<"\nGST 201 score: "<<gst201[k];
							cout<<"\nGPA: "<<gpa[k];
						}	
				}
				}	
				/*int count = 0;
					int size = sizeof(matricno[0]);
					while(count<size)
					{
						
					
					count++;
					}*/
					if(k == sizeof(matricno[0]))
					{
						cout<< "Whoops! Doesn't exist.";
					}
				
				
				break;
			}
			
		case 'U':
		case 'u':
			{
				cout<<"Whatever";
				break;
			}
			
		
		case 'P':
		case 'p':
			{
				cout<<"Save";
				break;
			}
			
		case 'A':
		case 'a':
			{
				/*cout<<"\n\nYou chose the option to view the file.\nHere it is:\n\n";
				
				string bare;
    			ifstream file ("stud.txt");
    
    			if (file.is_open())
				{
    			while (getline(file, bare))
				{
            		cout<<bare<<'\n';
				}
        
        		file.close();
    			}
				else cout <<"unable";
				break;*/
				
				cout<<"\n\nYou chose the option to view the file.\nHere it is:\n\n";
				 for(int i=0; i<9; i++)
			{
				for(int j=0; j<=9; j++){
				
					cout<<matricno[j];
				}
			}
			}
			
		case 'E': 
		case 'e':
			{
			cout<<"Bye bitch";
			break;
			}
			
		default:
			{
			cout<<"Bitch, you better be joking\n";
			goto main;
			break;
			}
			
	}
	
	

}