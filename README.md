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
			<td>Column of the table</td>
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
	</tbody>
</table>


## Code Examples


## Features
Support sort 
Support fix table header and scrollbar in table body
Support expand detail row with component
Support I18 

To-do list:
* to much

## Status
Init version

## Contact
Feel free to contact me here [github](https://github.com/biechao/vue-my-table)

## Licence
MIT
