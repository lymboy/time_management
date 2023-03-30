use jeecg_boot;

drop table if exists wkt_prod;
create table if not exists wkt_prod
(
    id            varchar(32) primary key comment '主键',
    prod_no       varchar(128) not null default '' comment '生产编号',
    prod_name     varchar(128) not null default '' comment '产品名称',
    prod_fig_no   varchar(128) not null default '' comment '产品图号',
    prod_sub_no   varchar(128) not null default '' comment '零部件图号',
    prod_sub_name varchar(128) not null default '' comment '零部件名称',
    prod_sub_no   int          not null default 1 comment '零部件数量',
    create_time   datetime              default current_timestamp comment '创建时间',
    update_time   datetime              default current_timestamp on update current_timestamp comment '修改时间'
) comment '产品编号表';


drop table if exists wkt_prod_process;
create table if not exists wkt_prod_process
(
    id                 varchar(32) primary key comment '主键',
    prod_id            varchar(32) comment '生产编号',
    process_name       varchar(128) not null default '' comment '工序名称',
    process_des        varchar(512) not null default '' comment '工序内容及工艺要求',
    process_quote      double       not null default 0.0 comment '工时定额',
    process_left_quote double       not null default 0.0 comment '剩余工时定额,暂没有用途，不用管',
    create_time        datetime              default current_timestamp comment '创建时间',
    update_time        datetime              default current_timestamp on update current_timestamp comment '修改时间'
) comment '产品工序表';



drop table if exists wkt_time_claim;
create table if not exists wkt_time_claim
(
    id             varchar(32) primary key comment '主键',
    process_id     varchar(32) comment '工序编号',
    process_series varchar(32) comment '工件流水号',
    worker_id      varchar(128) not null default '' comment '工人工号',
    worker_name    varchar(128) not null default '' comment '工人姓名',
    claim_duration double       not null comment '认领时长',
    create_time    datetime              default current_timestamp comment '创建时间',
    update_time    datetime              default current_timestamp on update current_timestamp comment '修改时间'
) comment '工时认领表';





