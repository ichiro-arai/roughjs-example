grammar Sysvis;

story: frame ('---' frame)* ';'? ;
frame: statements ;

statements: statement (';' statement)* ';'? ;
stmt: node
    | edge
    | attr
    | assign
    | cluster
    ;

attr : (CLUSTER | NODE | EDGE) assignments ;
assignments : '[' assign (',' assign)* ']' ;
assign : ID '=' ID ;

edge : ID '->' ID assignments? ;

node : ID assignments? ;

cluster : CLUSTER ID '{' statements '}' ;

NODE : 'node' ;
EDGE : 'edge' ;
CLUSTER: 'cluster' ;

ID : '\'' (~'\'')* '\'' {this.text = this.text.slice(0, -1)}
   | [a-zA-Z_] [a-zA-Z_0-9]*
   ;

SPACES : [ \u000B\t\r\n] -> channel(HIDDEN) ;
