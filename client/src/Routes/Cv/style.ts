const style: string = `
<style>
body {
    margin: 0;
    font-size: 12px;
}

.A4 {
    width: 210mm;
    height: 296mm;
}

.h1, h1, .fs-1 {
    font-size: 26px !important; 
}

.h2, h2, .fs-2 {
    font-size: 22px !important; 
}

.h3, h3, .fs-3 {
    font-size: 20px !important; 
}

.h4, h4, .fs-4 {
    font-size: 18px !important; 
}

.h5, h5, .fs-5 {
    font-size: 16px !important; 
}
.h6, h6, .fs-6 {
    font-size: 14px !important; 
}

.fs-7 {
    font-size: 12px !important; 
}

.fs-8 {
    font-size: 10px !important; 
}

@page {
    size: A4;
    margin: 0
}
@media print {
    .sheet-outer.A4, .sheet-outer.A5.landscape { 
        width: 210mm
    }
}
</style>
`;

export default style;