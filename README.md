# captaincheq.github.io
#include <stdio.h>
#define MAX_SIZE 80
int main()
{
    char str[MAX_SIZE];
    char toSearch;
    int i, count;
    gets(str);
    toSearch = getchar();
    count = 0;
    i=0;
    while(str[i] != '\0')
    {
        if(str[i] == toSearch)
        {
            count++;
        }
        i++;
    }
    printf("%d", count);
    return 0;
}
