---
title: Variables
slug: api-reference-7x/easyquery-packages/odata-package/Variables
sidebar:
  order: 100
---

## Index
- [edmxModelString](api-reference-7x/easyquery-packages/odata-package/variables#edmxmodelstring)

### `const` edmxModelString

● edmxModelString:`string` = ` 
`<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="4.0" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
    <edmx:DataServices>
        <Schema Namespace="ODataDemo.Models" xmlns="http://docs.oasis-open.org/odata/ns/edm">
            <EntityType Name="Category">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="CategoryName" Type="Edm.String" />
                <Property Name="Description" Type="Edm.String" />
                <Property Name="Picture" Type="Edm.Binary" />
            </EntityType>
            <EntityType Name="Customer">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.String" Nullable="false" />
                <Property Name="CompanyName" Type="Edm.String" />
                <Property Name="Address" Type="Edm.String" />
                <Property Name="City" Type="Edm.String" />
                <Property Name="Region" Type="Edm.String" />
                <Property Name="PostalCode" Type="Edm.String" />
                <Property Name="Country" Type="Edm.String" />
                <Property Name="ContactName" Type="Edm.String" />
                <Property Name="ContactTitle" Type="Edm.String" />
                <Property Name="Phone" Type="Edm.String" />
                <Property Name="Fax" Type="Edm.String" />
            </EntityType>
            <EntityType Name="Employee">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="LastName" Type="Edm.String" Nullable="false" />
                <Property Name="FirstName" Type="Edm.String" Nullable="false" />
                <Property Name="Title" Type="Edm.String" MaxLength="30" />
                <Property Name="TitleOfCourtesy" Type="Edm.String" />
                <Property Name="BirthDate" Type="Edm.DateTimeOffset" />
                <Property Name="HireDate" Type="Edm.DateTimeOffset" />
                <Property Name="Address" Type="Edm.String" />
                <Property Name="City" Type="Edm.String" />
                <Property Name="Region" Type="Edm.String" />
                <Property Name="PostalCode" Type="Edm.String" />
                <Property Name="Country" Type="Edm.String" />
                <Property Name="HomePhone" Type="Edm.String" MaxLength="24" />
                <Property Name="Extension" Type="Edm.String" MaxLength="4" />
                <Property Name="Photo" Type="Edm.Binary" />
                <Property Name="PhotoPath" Type="Edm.String" />
                <Property Name="Notes" Type="Edm.String" />
                <Property Name="ReportsTo" Type="Edm.Int32" />
                <NavigationProperty Name="Manager" Type="ODataDemo.Models.Employee">
                    <ReferentialConstraint Property="ReportsTo" ReferencedProperty="Id" />
                </NavigationProperty>
                <NavigationProperty Name="Orders" Type="Collection(ODataDemo.Models.Order)" />
            </EntityType>
            <EntityType Name="Product">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="Name" Type="Edm.String" />
                <Property Name="SupplierID" Type="Edm.Int32" />
                <Property Name="CategoryID" Type="Edm.Int32" />
                <Property Name="QuantityPerUnit" Type="Edm.String" />
                <Property Name="UnitPrice" Type="Edm.Decimal" />
                <Property Name="UnitsInStock" Type="Edm.Int16" />
                <Property Name="UnitsOnOrder" Type="Edm.Int16" />
                <Property Name="ReorderLevel" Type="Edm.Int16" />
                <Property Name="Discontinued" Type="Edm.Boolean" Nullable="false" />
                <NavigationProperty Name="Supplier" Type="ODataDemo.Models.Supplier">
                    <ReferentialConstraint Property="SupplierID" ReferencedProperty="Id" />
                </NavigationProperty>
                <NavigationProperty Name="Category" Type="ODataDemo.Models.Category">
                    <ReferentialConstraint Property="CategoryID" ReferencedProperty="Id" />
                </NavigationProperty>
            </EntityType>
            <EntityType Name="Shipper">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="CompanyName" Type="Edm.String" />
                <Property Name="Phone" Type="Edm.String" />
            </EntityType>
            <EntityType Name="Supplier">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="CompanyName" Type="Edm.String" />
                <Property Name="ContactName" Type="Edm.String" />
                <Property Name="ContactTitle" Type="Edm.String" />
                <Property Name="Address" Type="Edm.String" />
                <Property Name="City" Type="Edm.String" />
                <Property Name="Region" Type="Edm.String" />
                <Property Name="PostalCode" Type="Edm.String" />
                <Property Name="Country" Type="Edm.String" />
                <Property Name="Phone" Type="Edm.String" />
                <Property Name="Fax" Type="Edm.String" />
                <Property Name="HomePage" Type="Edm.String" />
            </EntityType>
            <EntityType Name="Order">
                <Key>
                    <PropertyRef Name="Id" />
                </Key>
                <Property Name="Id" Type="Edm.Int32" Nullable="false" />
                <Property Name="OrderDate" Type="Edm.DateTimeOffset" />
                <Property Name="RequiredDate" Type="Edm.DateTimeOffset" />
                <Property Name="ShippedDate" Type="Edm.DateTimeOffset" />
                <Property Name="Freight" Type="Edm.Decimal" />
                <Property Name="CustomerID" Type="Edm.String" />
                <Property Name="EmployeeID" Type="Edm.Int32" />
                <Property Name="ShipVia" Type="Edm.Int32" />
                <Property Name="ShipName" Type="Edm.String" />
                <Property Name="ShipAddress" Type="Edm.String" />
                <Property Name="ShipCity" Type="Edm.String" />
                <Property Name="ShipRegion" Type="Edm.String" />
                <Property Name="ShipPostalCode" Type="Edm.String" />
                <Property Name="ShipCountry" Type="Edm.String" />
                <NavigationProperty Name="Customer" Type="ODataDemo.Models.Customer">
                    <ReferentialConstraint Property="CustomerID" ReferencedProperty="Id" />
                </NavigationProperty>
                <NavigationProperty Name="Employee" Type="ODataDemo.Models.Employee">
                    <ReferentialConstraint Property="EmployeeID" ReferencedProperty="Id" />
                </NavigationProperty>
                <NavigationProperty Name="Items" Type="Collection(ODataDemo.Models.OrderDetail)" />
            </EntityType>
            <EntityType Name="OrderDetail">
                <Key>
                    <PropertyRef Name="OrderID" />
                    <PropertyRef Name="ProductID" />
                </Key>
                <Property Name="OrderID" Type="Edm.Int32" Nullable="false" />
                <Property Name="ProductID" Type="Edm.Int32" Nullable="false" />
                <Property Name="UnitPrice" Type="Edm.Decimal" Nullable="false" />
                <Property Name="Quantity" Type="Edm.Int16" Nullable="false" />
                <Property Name="Discount" Type="Edm.Single" Nullable="false" />
                <NavigationProperty Name="Order" Type="ODataDemo.Models.Order" />
                <NavigationProperty Name="Product" Type="ODataDemo.Models.Product" />
            </EntityType>
        </Schema>
        <Schema Namespace="Default" xmlns="http://docs.oasis-open.org/odata/ns/edm">
            <EntityContainer Name="Container">
                <EntitySet Name="Categories" EntityType="ODataDemo.Models.Category" />
                <EntitySet Name="Customers" EntityType="ODataDemo.Models.Customer" />
                <EntitySet Name="Employees" EntityType="ODataDemo.Models.Employee">
                    <NavigationPropertyBinding Path="Manager" Target="Employees" />
                    <NavigationPropertyBinding Path="Orders" Target="Orders" />
                </EntitySet>
                <EntitySet Name="Products" EntityType="ODataDemo.Models.Product">
                    <NavigationPropertyBinding Path="Category" Target="Categories" />
                    <NavigationPropertyBinding Path="Supplier" Target="Suppliers" />
                </EntitySet>
                <EntitySet Name="Shippers" EntityType="ODataDemo.Models.Shipper" />
                <EntitySet Name="Suppliers" EntityType="ODataDemo.Models.Supplier" />
                <EntitySet Name="Orders" EntityType="ODataDemo.Models.Order">
                    <NavigationPropertyBinding Path="Customer" Target="Customers" />
                    <NavigationPropertyBinding Path="Employee" Target="Employees" />
                    <NavigationPropertyBinding Path="Items" Target="OrderDetails" />
                </EntitySet>
                <EntitySet Name="OrderDetails" EntityType="ODataDemo.Models.OrderDetail">
                    <NavigationPropertyBinding Path="Order" Target="Orders" />
                    <NavigationPropertyBinding Path="Product" Target="Products" />
                </EntitySet>
            </EntityContainer>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>
``


---
