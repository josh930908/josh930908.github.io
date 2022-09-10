#include<bits/stdc++.h>
using namespace std;

int n;

int main(){
    ofstream fchi("chi.txt");
    ifstream feng("LV5.tsv");
    ofstream fout("LV5.js",ios::trunc);
    
    int n=0,id;
    string ch,en;
    string sans="var ansl=[",sq="var q=[";
    while(feng>>id){
        ++n;
        feng>>en>>ch;
        sans+="\n\""+en+"\",";
        sq+="\n\"(";
        sq+=en[0];
        sq+="________";
        sq+=en[en.size()-1];
        sq+=")";
        sq+=ch+"\",";
    }
    sans.pop_back();
    sq.pop_back();
    sans+="\n];";
    sq+="\n];";
    fout<<"var n="<<n<<";"<<"\n\n";
    fout<<sans<<"\n\n";
    fout<<sq;
}