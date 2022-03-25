export class Ingreso implements CFDIIngreso {
    public Impuestos: Impuesto[];
    public Emisor: Emisor;
    public Receptor: Receptor;
    public Conceptos: Concepto[];
    public _Certificado: string;
    public _Exportacion: string;
    public _Fecha: Date;
    public _Folio: string;
    public _LugarExpedicion: string;
    public _Moneda: string;
    public _NoCertificado: string;
    public _Sello: string;
    public _Serie: string;
    public _SubTotal: number;
    public _TipoDeComprobante: "I" | "E" | "T";
    public _Total: number;
    public _Version: string;

    constructor(originalData: any){
        const data = this.asIncome(originalData);

        this.Conceptos = data.Conceptos;
        this.Emisor = data.Emisor;
        this.Impuestos = data.Impuestos;
        this.Receptor = data.Receptor;
        this._Certificado = data._Certificado;
        this._Exportacion = data._Exportacion;
        this._Fecha = data._Fecha;
        this._Folio = data._Folio;
        this._LugarExpedicion = data._LugarExpedicion;
        this._Moneda = data._Moneda;
        this._NoCertificado = data._NoCertificado;
        this._Sello = data._Sello;
        this._Serie = data._Serie;
        this._SubTotal = data._SubTotal;
        this._TipoDeComprobante = data._TipoDeComprobante;
        this._Total = data._Total;
        this._Version = data._Version;
    }

    private asIncome(data: any): CFDIIngreso {   

        if(!data.Impuestos[0]){
            data.Impuestos = [ data.Impuestos, ];
        }

        for(let i = 0; i < data.Impuestos.length; i++){
            if(!data.Impuestos[i].Traslados[0]){
                data.Impuestos[i].Traslados = [ data.Impuestos[i].Traslados.Traslado ]
            }
        }
    
        if(!data.Conceptos[0]){
            data.Conceptos = [ data.Conceptos.Concepto ];
        }
        
        return data;
    }
}

export class Egreso implements CFDIEgreso {
    public CfdiRelacionados: CfdiRelacionados;
    public Impuestos: Impuesto[];
    public Emisor: Emisor;
    public Receptor: Receptor;
    public Conceptos: Concepto[];
    public _Certificado: string;
    public _Exportacion: string;
    public _Fecha: Date;
    public _Folio: string;
    public _LugarExpedicion: string;
    public _Moneda: string;
    public _NoCertificado: string;
    public _Sello: string;
    public _Serie: string;
    public _SubTotal: number;
    public _TipoDeComprobante: "I" | "E" | "T";
    public _Total: number;
    public _Version: string;

    constructor(originalData: any){
        const data = this.asExpenditure(originalData);

        this.CfdiRelacionados = data.CfdiRelacionados;
        this.Conceptos = data.Conceptos;
        this.Emisor = data.Emisor;
        this.Impuestos = data.Impuestos;
        this.Receptor = data.Receptor;
        this._Certificado = data._Certificado;
        this._Exportacion = data._Exportacion;
        this._Fecha = data._Fecha;
        this._Folio = data._Folio;
        this._LugarExpedicion = data._LugarExpedicion;
        this._Moneda = data._Moneda;
        this._NoCertificado = data._NoCertificado;
        this._Sello = data._Sello;
        this._Serie = data._Serie;
        this._SubTotal = data._SubTotal;
        this._TipoDeComprobante = data._TipoDeComprobante;
        this._Total = data._Total;
        this._Version = data._Version;
    }

    public asExpenditure(data: any): CFDIEgreso {    
        if(!data.Impuestos[0]){
          data.Impuestos = [ data.Impuestos, ];
        }

        for(let i = 0; i < data.Impuestos.length; i++){
            if(!data.Impuestos[i].Traslados[0]){
                data.Impuestos[i].Traslados = [ data.Impuestos[i].Traslados.Traslado ]
            }
        }
    
        if(!data.Conceptos[0]){
          data.Conceptos = [ data.Conceptos.Concepto, ];
        }
        
        if(!data.CfdiRelacionados.CfdiRelacionado[0]){
          data.CfdiRelacionados.CfdiRelacionado = [ data.CfdiRelacionados.CfdiRelacionado, ];
        } 

        return data;
    }
}

export class Traslado implements CFDITraslado {
    public Complemento: Complemento;
    public Emisor: Emisor;
    public Receptor: Receptor;
    public Conceptos: Concepto[];
    public _Certificado: string;
    public _Exportacion: string;
    public _Fecha: Date;
    public _Folio: string;
    public _LugarExpedicion: string;
    public _Moneda: string;
    public _NoCertificado: string;
    public _Sello: string;
    public _Serie: string;
    public _SubTotal: number;
    public _TipoDeComprobante: "I" | "E" | "T";
    public _Total: number;
    public _Version: string;

    constructor(originalData: any){
        const data = this.asTransfer(originalData);

        this.Complemento = {
            TimbreFiscalDigital: {
                _FechaTimbrado: data.Complemento.TimbreFiscalDigital._FechaTimbrado,
                _NoCertificadoSAT: data.Complemento.TimbreFiscalDigital._NoCertificadoSAT,
                _RfcProvCertif: data.Complemento.TimbreFiscalDigital._RfcProvCertif,
                _SelloCFD: data.Complemento.TimbreFiscalDigital._SelloCFD,
                _SelloSAT: data.Complemento.TimbreFiscalDigital._SelloSAT,
                _UUID: data.Complemento.TimbreFiscalDigital._UUID,
            }
        };
        
        this.Conceptos = data.Conceptos;
        this.Emisor = data.Emisor;
        this.Receptor = data.Receptor;
        this._Certificado = data._Certificado;
        this._Exportacion = data._Exportacion;
        this._Fecha = data._Fecha;
        this._Folio = data._Folio;
        this._LugarExpedicion = data._LugarExpedicion;
        this._Moneda = data._Moneda;
        this._NoCertificado = data._NoCertificado;
        this._Sello = data._Sello;
        this._Serie = data._Serie;
        this._SubTotal = data._SubTotal;
        this._TipoDeComprobante = data._TipoDeComprobante;
        this._Total = data._Total;
        this._Version = data._Version;
    }
    
    public asTransfer(data: any): CFDITraslado {
        if(!data.Conceptos[0]){
            data.Conceptos = [data.Conceptos.Concepto];
        }
      
        return data;
    }
}

interface CFDIIngreso extends CFDI{
    Impuestos: Impuesto[],
}

interface CFDIEgreso extends CFDI {
    CfdiRelacionados: CfdiRelacionados,
    Impuestos: Impuesto[],
}

interface CFDITraslado extends CFDI {
    Complemento: Complemento,
}

interface CFDI {
    Emisor: Emisor,
    Receptor: Receptor,
    Conceptos: Concepto[],

    _Certificado: string,
    _Exportacion: string,
    _Fecha: Date,
    _Folio: string,
    _LugarExpedicion: string,
    _Moneda: string,
    _NoCertificado: string,
    _Sello: string,
    _Serie: string,
    _SubTotal: number
    _TipoDeComprobante: "I" | "E" | "T",
    _Total: number,
    _Version: string,
}

interface Emisor {
    _Nombre: string,
    _RegimenFiscal: string,
    _Rfc: string,
}

interface Receptor {
    _DomicilioFiscalReceptor: string,
    _Nombre: string,
    _RegimenFiscalReceptor: string,
    _Rfc: string,
    _UsoCFDI: "G01" | "G02" | "G03" | "I01" | "I02" | "I03" | "I04" | "I05" | "I06" | "IO7" |"I08" | "D01" | "D02" | "D03" | "D04" | "D05" | "D06" | "D07" | "D08" | "D09" | "D10" | "P01",
}

interface Concepto {
    Impuestos: Impuesto[],
    _Cantidad: number,
    _ClaveProdServ: string,
    _ClaveUnidad: string,
    _Descripcion: string,
    _Importe: number,
    _NoIdentificacion: string,
    _ObjetoImp: string,
    _Unidad: string,
    _ValorUnitario: string,
}

interface Impuesto {
    Traslados: Translado[];
    _TotalImpuestosTrasladados?: number,
}

interface Translado {
    _Base: string,
    _Importe: string,
    _TipoFactor: string,
    _Impuesto: string,
    _TasaOCuota: string,
}

interface CfdiRelacionados {
    CfdiRelacionado: { UID : string}[];
    _TipoRelacion: string,
}

interface Complemento {
    TimbreFiscalDigital: {
        _FechaTimbrado: Date;
        _NoCertificadoSAT: string,
        _RfcProvCertif: string,
        _SelloCFD: string,
        _SelloSAT: string,
        _UUID: string,
    }
}
