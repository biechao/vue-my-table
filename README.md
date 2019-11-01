# vue-my-table
> This is a table library ffor vue, you can use it in vue project and via script tag directly.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Available props and functions](#props)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [Licence](#licence)

## General info
The table is follow boostrap style, but all of the dependencies has been resolved in this components, you do not need to install any other library anymore.

## Screenshots
![Example screenshot](https://raw.githubusercontent.com/biechao/vue-my-table/master/img/table.png)

## Setup
npm install vue-my-table
Or use script tag directly
```
<script src="vue.js"> </script>
<script src="vueMytable.umd.js"></script>
<link rel="stylesheet" type="text/css" href="vueMyTable.css">
```

## Available props and functions
Object for param
<table class="custom">
	<thead>
		<th>Props/methods</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</thead>
	<tbody>
		<tr>
			<td>columns</td>
			<td>Array</td>
			<td></td>
			<td>Column of the table, please refer to this <a href="#columns">table</a></td>
		</tr>
		<tr>
			<td>sortColumn</td>
			<td>String</td>
			<td>-</td>
			<td>Default sort column name</td>
		</tr>
		<tr>
			<td>sortOrder</td>
			<td>String</td>
			<td>-</td>
			<td>Default sort type 'asc' or 'desc'</td>
		</tr>
		<tr>
			<td>height</td>
			<td>Int</td>
			<td>-</td>
			<td>If set height to the table, the header will be fixed and scrollbar will be shown in body of the table.</td>
		</tr>
		<tr>
			<td>detailRowComponentName</td>
			<td>String</td>
			<td>-</td>
			<td>component for the expand detail row</td>
		</tr>
		<tr>
			<td>Striped</td>
			<td>Boolean</td>
			<td>false</td>
			<td>Striped table makes it easier to distinguish different rows, false by default</td>
		</tr>
		<tr>
			<td>mode</td>
			<td>String</td>
			<td>local</td>
			<td>
				'local' for use local data for table<br/>
				'server' for get data from backend server
			</td>
		</tr>
		<tr>
			<td>url</td>
			<td>String</td>
			<td>-</td>
			<td>
				The url to get data from backend server for the table, only used in server mode
			</td>
		</tr>		
		<tr>
			<td>parameters for backend server</td>
			<td>String</td>
			<td>only used for server mode</td>
			<td>
				'rows' - how many records shows per page<br/>'page' - current page number<br/>'sidx' - sort by which column <br/>'sord' - sort by which order asc or desc
			</td>
		</tr>
		<tr>
			<td>response for backend server</td>
			<td>Object</td>
			<td>only used for server mode</td>
			<td>
				```
				{
					rows:[{object},{object}],
					total:20
				}
				```
			</td>
		</tr>								
	</tbody>
</table>

<span id="columns">Object for columns</span>
<table class="custom">
	<thead>
		<th>Name</th>
		<th>Type</th>
		<th>Default</th>
		<th>Description</th>
	</thead>
	<tbody>
		<tr>
			<td>index</td>
			<td>String</td>
			<td>-</td>
			<td>index name for the tr in table, it should be a key in json data, such as 'id'</td>
		</tr>
		<tr>
			<td>isCheckbox</td>
			<td>Boolean</td>
			<td>false</td>
			<td>Show checkbox in the column, if it is set to true, there is no need to set value for the other parameters</td>
		</tr>
		<tr>
			<td>isDetailRow</td>
			<td>Boolean</td>
			<td>-</td>
			<td>Show expand icon in the column, if it is set to true, there is no need to set value for the other parameters</td>
		</tr>
		<tr>
			<td>label</td>
			<td>String</td>
			<td>-</td>
			<td>header of the column</td>
		</tr>
		<tr>
			<td>sortable</td>
			<td>Boolean</td>
			<td>false</td>
			<td>Support sort for this column</td>
		</tr>
		<tr>
			<td>width</td>
			<td>Int</td>
			<td>-</td>
			<td>width for this column, it is percent, not PX</td>
		</tr>
		<tr>
			<td>callback</td>
			<td>function</td>
			<td>-</td>
			<td>if set callback for this column, the content of this column will be return value of the callback function, <br/>and the html tag will be render in the return value, so to prevent XSS injection, make sure the html tags such as '<' and '>' have been escaped before return.</td>
		</tr>
		<tr>
			<td>component_name</td>
			<td>String</td>
			<td>-</td>
			<td>If callback can not match your requirement, you can pass a component to the column and do anything you want in this component</td>
		</tr>																	
	</tbody>
</table>

## Code Examples
For examples please refer to [github](https://biechao.github.io/2019/10/29/how%20to%20use%20vue-my-table/)

## Features
Support sort 
Support fix table header and scrollbar in table body
Support expand detail row with component
Support custom sort column
Support local and server data mode
Support I18 

To-do list:
* to much

## Status
Init version

## Contact
Feel free to contact me here [github](https://github.com/biechao/vue-my-table)

## Licence
MIT
