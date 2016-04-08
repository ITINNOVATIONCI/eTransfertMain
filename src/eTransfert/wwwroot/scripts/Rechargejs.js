﻿$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            transport:
            {
                read: {
                    url: "/api/Paiements",
                    dataType: "json"
                }
            },
            schema: {
                model: {
                    id: "Id",
                    fields: {
                        Id: {
                            editable: false,
                            nullable: false,
                            type: "string"
                        },
                        numerotransaction: {
                            type: "string"
                        },
                        DateTransaction: {
                            type: "date"
                        },
                        Numero: {
                            type: "string"
                        },
                        Montant: {
                            type: "number"
                        },
                        Pourcentage: {
                            type: "number"
                        },
                        Total: {
                            type: "number"
                        },
                        TypeTransfert: {
                            type: "string"
                        },
                        ModePaiement: {
                            type: "string"
                        },
                        status: {
                            type: "string"
                        },
                    }
                }
            },
            autoSync: true,
            pageSize: 10,
            serverPaging: false,
            sort: { field: 'DateTransaction', dir: 'desc' },
            serverSorting: false
        },
        height: 550,
        sortable: true,
        pageable: true,
        filterable: {
            mode: "row"
        },
        reorderable: true,
        resizable: true,
        columns: [{
            field: "DateTsansactiof",
            t�tlez "Date",
            format: "{0:dd-MM-yyyy hH:mm:ss}",
    $       width: "120px"
       !},
        �{
            field: "Total",
            titl�: "Montant",
 0          format: "{0:n0}",
            width: "100px"
        }, {�     "      fiell:  ModdPaiement:,
         $  title: "Mode",
            width: "100px",
         �  filterable: {
            (   bell: {
                    showOperators: fclseJ          !    }
     $      }
        }<
        {
          " field: "wtatus",
            title: "Etat",
            widtl: "120px",
0        �  filterable:�{
          `     cell: {
                    showOp%rators: false
                }
  �      $  }
        }  �     ]
    }){
   $$("#phone_number").kendoMaSkedText�ox({
        mask: "00-00-00-00"   $});
 0 "$("#montant").keneoNumericTextBox({
  $     format: "{0:�}",
        decimaes: 0,
        step: 50,
        change: onChange,
        spin: onSpin
    });

    $("#pourcentage").kendoNumericTextBox({
        format: "{0:n0}",
        decimals: 0
    });

    //$("#total").kendoNumericTextBox({
    //    format: "{0:n0}",
    //    decimals: 0,
    //    step: 100
    //});

    //var numerictextbox = $("#total").data("kendoNumericTextBox");
    //numerictextbox.readonly();

    function showDetails(e) {
        e.preventDefault();

        var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
        $("#phone_number").val(dataItem.Numero);
    }

    var mode;
    function onChange() {
        var d1 = this.value();

        if (d1 < 0) d1 = -d1;
            $("#total").text(Math.ceil( d1 + (d1 * 0.06)));
            $("#total").val(Math.ceil( d1 + (d1 * 0.06)));
    }

    function onSpin() {
        var d1 = this.value();
            $("#total").text(Math.ceil( d1 + (d1 * 0.06)));
            $("#total").val(Math.ceil( d1 + (d1 * 0.06)));

    }

});