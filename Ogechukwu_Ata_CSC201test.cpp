#include <iostream>
#include <string>
#include <sstream>
#include <unistd.h>
using namespace std;



string question[10] = {"1. Which of the following is the correct identifier ?\nA. $var_name \nB. VAR_123 \nC. varname@ \nD. None of the above\n", 
"2. Which of the following is the address operator ?\nA. @ \nB. # \nC. &\nD. %\n", 
"3. Which of the following features must be supported"
"by any programming language to become a pure object-oriented programming "
"language?\nA. Encapsulation \nB. Inheritance \nC. Polymorphism \nD. All of the above\n",
"4. Which of the following refers to characteristics of an array?\nA. An array is a set of similar data items \n"
"B. An array is a set of distinct data items\nC. An array can hold different types of data types \nD. None of the above \n",
"5. If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item? \n"
"A. 2\nB. 3\nC. 4\nD. 5\n",
"6. Which of the following is the correct syntax for declaring the array?\n"
"A. int array{};\nB. int array[5]; \nC. Array[5]; \nD. None of the above\n",
"7. Which of the following is the correct syntax for accessing the first element? \n"
"A. array[2]\nB. array[0]\nC. Array[5]\nD.array[1]\n",
"8. Which of the following gives the 4th element of the array? \n"
"A. array[2]\nB. array[3]\nC. Array[5]\nD.array[1]\n",
"9. Which type of memory is used by an Array in C++ programming language? \n"
"A. Contiguos\nB. Non-contiguos\nC. Both A and B\nD.Not mentioned\n",
"10. Which one of the following is the correct definition of the 'is_array();' function in C++?\n"
"A. It checks that the specified variable is of the array or not\n"
"B. It checks that the specified array of single dimension or not\n"
"C. It checks that the array specified of multidimension or not\n"
"D. Both B and C\n"

};

string name;
char putin[10];
char putout[10];
char answer[10] = {'B', 'C', 'D', 'A', 'C', 'B', 'B', 'B', 'A', 'A'};
char answer1[10] = {'b', 'c', 'd', 'a', 'c', 'b', 'b', 'b', 'a', 'a'};

int score[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
int totalscore = 0;


int main()
{
	int play;
	cout<<"******************WELCOME TO THE C++ QUIZ******************"<<endl;
	cout<<"\t\tBrought to you by YomaCorp\t\t\n"<<endl;
	player:
	cout<<"Enter 1 to play the game.\n";
	cout<<"Enter 2 to exit the game.\n";
	cin>>play;
	
	if(play == 1)
	{
		cout<<"Welcome, what name would you be called?\n";
		cin>>name;
		cout<<"\n";
		cout<<"Welcome "<<name<<endl;
		cout<<"\n";
		sleep(1);
		cout<<"\t\t********RULES OF THE QUIZ********"<<endl;
		cout<<"1. You are expected to answer 10 questions for the complete score."<<endl;
		cout<<"2. You can skip a question and return to it later."<<endl;
		cout<<"3. To answer a question, put in the character for the answer, and press enter."<<endl;
		cout<<"4. To Skip a question, press N."<<endl;
		cout<<"5. To go to a previous question, press P."<<endl;
		cout<<"6. To Submit before finishing the ten question, press F.\n\n";
		
	sleep(1);
	cout<<"You will start with the first question.\n\n"<<endl;
	sleep(1);
	}
	else if (play == 2)
	{
		return(0);
	}
	else
	{
		cout<<"Wrong option, try again\n\n";
		goto player;		
	}
	
	
	
	for(int i = 0; i<10; i++)
	{
		label:
		cout<<question[i];
		cout<<"Your answer: ";
		cin>>putin[i];
		cout<<"\n";		
		if (putin[i] == 'N'|| putin[i] == 'n')
		{
			cout<<"You are skipping this question\n";
			sleep(1);
			
			if (i==9)
			{
				cout<<"This is the last question\n";
				i = 9;
				
				goto label;
				
			}
			else
			{
				i+=1;
				
			goto label;
			
			}
						
		}
		else if (putin[i] == 'P' || putin[i] == 'p') 
		{
			cout<<"You are going to the previous question.\n";
			sleep(1);
				if (i==0)
			{
				cout<<"This is the first question\n";
				i = 0;
				
				goto label;
				
			}
			else
			{
				i-=1;
				if(putin[i] == 'N'  || putin[i] == 'n' ) {
				
			cout<<"You skipped number " << i+1 <<"\n";
		}
		else if (putin[i] != 'N'  || putin[i] != 'n')
		{
			cout<<"You put in "<<putin[i] <<" for number " << i+1 <<"\n";
		}
			
			goto label;
		
			}
			
					
		}
		else if(putin[i] == 'a'||putin[i] == 'b'||putin[i] == 'c'||putin[i] == 'd'||putin[i] == 'A'||putin[i] == 'B'||putin[i] == 'C'||putin[i] == 'D')
		{
			putout[i] = putin[i];
		
		}
		else if(putin[i] == 'F' || putin[i] == 'f')
		{
			char view;
			cout<<"You have submitted\n";
			
			cout<<"Press V to view your script\n";
			cin>>view;
			if(view == 'v' || view == 'V'){
			
			for (int i = 0; i<10; i++)
			{
				cout<<question[i];
				cout<<"You Choice: " <<putout[i];
				cout<<"\n";
				cout<<"Correct answer: "<<answer[i] <<"\n";
				cout<<"\n";
				if (putout[i] == answer[i] || putout[i] == answer1[i] )
				{
					cout<<"You got it____________________________Correct\n";
					score[i] = score[i] + 10;
					cout<<"Your score for this question is "<<score[i];
					
					cout<<"\n\n";
				}
				else
				{
					cout<<"You got it____________________________Wrong\n";
					score[i] = score[i] + 0;
					cout<<"Your score for this question is "<<score[i];	
					
					cout<<"\n\n";
				}
			totalscore+=score[i];
				
			}
			int finalscore = totalscore/10;
			cout<<"\n";
			cout<<"You scored " <<finalscore<< " out of 10.\n"; 
			cout<<name<<", your total score is " <<totalscore;
			cout<<"\n";
			if (totalscore >= 80)
			{
				cout<<"What a splendid score. You were brilliant!!!\n";
				cout<<"Thanks for playing The YomaCorp quiz. See you next time!\n";
			}
			else if(totalscore < 80 && totalscore >= 60)
			{
				cout<<"You did well. Better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz. Can't wait to see you next time.\n";
			}
			else if(totalscore < 60)
			{
				cout<<"Whoops. You can definitely do better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz.\n";
			}
			return 0;}
			
			else
			{
				cout<<"That's wrong, but I'll show the total score\n";
				for (int i = 0; i<10; i++)
			{
				
				
				if (putout[i] == answer[i] || putout[i] == answer1[i] )
				{
				
					score[i] = score[i] + 10;
					
				}
				else
				{
				
					score[i] = score[i] + 0;
						
				}
			totalscore+=score[i];	
			}
			cout<<"\n";
			int finalscore = totalscore/10;
			
			cout<<"You scored " <<finalscore<< " out of 10.\n"; 
				cout<<name <<", your total score is " <<totalscore;
			cout<<"\n";
			if (totalscore >= 80)
			{
				cout<<"What a splendid score. You were brilliant!!!\n";
				cout<<"Thanks for playing The YomaCorp quiz. See you next time!\n";
			}
			else if(totalscore < 80 && totalscore >= 60)
			{
				cout<<"You did well. Better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz. Can't wait to see you next time.\n";
			}
			else if(totalscore < 60)
			{
				cout<<"Whoops. You can definitely do better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz.\n";
			}
			return 0;
			}
		}
		else
		{
			cout<<"Wrong input. You will have no score for this question\n";
			score[i] = 0;
		}
	
	 
	}
	char submit;
	cout<<"Press any letter to submit" <<endl;
	cin>>submit;
		char view;
			cout<<"You have submitted\n";
			
			cout<<"Press V to view your script\n";
			cin>>view;
			if(view == 'v' || view == 'V'){
			for (int i = 0; i<10; i++)
			{
				cout<<question[i];
				cout<<"Your choice: " <<putout[i] <<"\n";
				cout<<"Correct answer: "<<answer[i] <<"\n";
				if (putout[i] == answer[i] || putout[i] == answer1[i] )
				{
					cout<<"You got it____________________________Correct\n";
					score[i] = score[i] + 10;
					cout<<"Your score for this question is "<<score[i] <<"\n\n";
				}
				else
				{
					cout<<"You got it____________________________Wrong\n";
					score[i] = score[i] + 0;
					cout<<"Your score for this question is "<<score[i] <<"\n\n";	
				}
			totalscore+=score[i];	
			}
			int finalscore = totalscore/10;
			cout<<"\n";
			cout<<"You scored " <<finalscore<< " out of 10.\n"; 
			cout<<name<<", your total score is " <<totalscore;
			cout<<"\n";
			if (totalscore >= 80)
			{
				cout<<"What a splendid score. You were brilliant!!!\n";
				cout<<"Thanks for playing The YomaCorp quiz. See you next time!\n";
			}
			else if(totalscore < 80 && totalscore >= 60)
			{
				cout<<"You did well. Better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz. Can't wait to see you next time.\n";
			}
			else if(totalscore < 60)
			{
				cout<<"Whoops. You can definitely do better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz.\n";
			}
			return 0;}
			
			else
			{
				cout<<"That's definitely not a V, but I'll still show your total score\n";
				for (int i = 0; i<10; i++)
			{
								
				if (putout[i] == answer[i] || putout[i] == answer1[i] )
				{
				
					score[i] = score[i] + 10;
					
				}
				else
				{
				
					score[i] = score[i] + 0;
						
				}
			totalscore+=score[i];	
			}
			int finalscore = totalscore/10;
			cout<<"\n";
			cout<<"You scored " <<finalscore<< " out of 10.\n"; 
				cout<<name<<", your total score is " <<totalscore;
			cout<<"\n";
			if (totalscore >= 80)
			{
				cout<<"What a splendid score. You were brilliant!!!\n";
				cout<<"Thanks for playing The YomaCorp quiz. See you next time!\n";
			}
			else if(totalscore < 80 && totalscore >= 60)
			{
				cout<<"You did well. Better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz. Can't wait to see you next time.\n";
			}
			else if(totalscore < 60)
			{
				cout<<"Whoops. You can definitely do better next time.\n";
				cout<<"Thanks for playing The YomaCorp quiz.\n";
			}
				return 0;
			}
	
	}
	
	
