#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <fstream>
#include <string>
#include <sstream>

using namespace std;


int main() {
    string line;
    ifstream file ("stud.txt");
    
    if (file.is_open()) {
        
        while (getline(file, line))
		{
            cout<<line<<'\n';
        }
        
        file.close();
    }

    else cout <<"unable";

    return 0;
}