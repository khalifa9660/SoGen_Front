import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { DataTableDataSource, DataTableItem } from "./data-table-datasource";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements AfterViewInit {
  dataSource!: DataTableDataSource
  @Input() tableData: DataTableItem[] = [];
  @Input() displayedColumns: string[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;

  ngOnInit(): void {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.dataSource.data = this.tableData;
  }
  
}
