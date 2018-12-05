grammar Sysvis;

story: frame ('---' frame)* ';'? ;
frame: stmt_list ;

stmt_list: stmt (';' stmt)* ';'? ;
stmt: node_stmt
    | edge_stmt
    | attr_stmt
    | assignment
    | cluster
    ;

attr_stmt : (CLUSTER | NODE | EDGE) attr_list ;
attr_list : '[' assignment (',' assignment)* ']' ;
assignment : ID '=' ID ;

edge_stmt : ID '->' ID attr_list? ;

node_stmt : ID attr_list? ;

cluster : CLUSTER ID '{' stmt_list '}' ;

NODE : 'node' ;
EDGE : 'edge' ;
CLUSTER: 'cluster' ;

ID : '\'' (~'\'')* '\'' {this.text = this.text.slice(0, -1)}
   | [a-zA-Z_] [a-zA-Z_0-9]*
   ;

SPACES : [ \u000B\t\r\n] -> channel(HIDDEN) ;
