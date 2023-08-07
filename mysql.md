### Mysql

使用 `docker pull mysql `
点击 `run` 启动
需要配置参数 比如指定挂载的卷(用于保存数据到本地)
配置 `MYSQL_ROOT_PASSWORD` 用于登录 mysql (第二次可不用)

### mysql workbench
使用官方的 mysql workbench 链接我们刚才起的 mysql 

#### 创建表

语法为 

`CREATE TABLE tableName (column1, column2, .... columnn) CHARSET=utf8mb4`

其中 column1 是单独设置每一行, 即设置键名, 保存的什么类型的值, 是否可以是null, 备注信息等, 如下

`id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Id'`

#### 删除表

DROP TABLE tableName 

#### 查询表

SELECT * FROM tableName  (这个是全量查询)
SELECT key1, key2, ...keyn FROM tableName  (这个是查询其中的几列, 我们也可以通过 as 给列起别名) 

- where: 查询条件，比如 where id=1
- as: 别名，比如 select xxx as 'yyy'
- and: 连接多个条件
- in/not in: 集合查找，比如 where a in (1,2)
- between and: 区间查找，比如 where a between 1 and 10
- limit: 分页，比如 limit 0,5
- order by: 排序，可以指定先根据什么升序、如果相等再根据什么降序，比如 order by a desc,b asc
- group by: 分组，比如 group by aaa
- having: 分组之后再过滤，比如 group by aaa having xxx > 5
- distinct: 去重

mysql 还有内置的函数
聚合函数: 用于对数据的统计，比如 AVG、COUNT、SUM、MIN、MAX
字符串函数: 用于对字符串的处理，比如 CONCAT、SUBSTR、LENGTH、UPPER、LOWER
数值函数: 用于对数值的处理，比如 ROUND、CEIL、FLOOR、ABS、MOD
日期函数: 对日期、时间进行处理，比如 DATE、TIME、YEAR、MONTH、DAY
条件函数: 根据条件是否成立返回不同的值，比如 IF、CASE
系统函数: 用于获取系统信息，比如 VERSION、DATABASE、USER
其他函数: NULLIF、COALESCE、GREATEST、LEAST
类型转换函数: 转换类型为另一种，比如 CAST、CONVERT、DATE_FORMAT、STR_TO_DATE



#### 插入表

INSERT INTO tableName  (insertKey1, insertKey2, ...insertKeyn) values (key1value, key2value, ...keynvalue)1, ...(key1value, key2value, ...keynvalue)n

tableName  后面跟的 其实就是我们需要对那几个 键名进行复制

values 后面跟着的 就是我们 每一行赋的值

#### 