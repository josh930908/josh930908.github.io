#include<bits/stdc++.h>
using namespace std;

int n;

int main(){
    ifstream feng("400voc.tsv");
    ofstream fout("file.js",ios::trunc);
    
    int n=0,id;
    string ch,en;
    string sans="var ansl=[",sq="var q=[";
    while(feng>>id){
        ++n;
        feng>>en>>ch;
        sans+="\n\""+en+"\",";
        sq+="\n\""+ch+"\",";
    }
    sans.pop_back();
    sq.pop_back();
    sans+="\n];";
    sq+="\n];";
    fout<<"var n="<<n<<";"<<"\n\n";
    fout<<sans<<"\n\n";
    fout<<sq;
}