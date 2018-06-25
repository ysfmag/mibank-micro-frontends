/*! Built with http://stenciljs.com */
const{h:t}=window.mibank;class e{constructor(){this.selectedRow=0,this.headings=[],this.data=[]}selectRow(t){this.selectedRow=t.currentTarget.rowIndex-1,this.rowOnClick(t)}generateHeader(){const e=this.headings.map(e=>t("th",null,e));return t("tr",null,e)}generateGrid(){return this.data.map((e,r)=>{const a=e.map(e=>t("td",null,e));return t("tr",{class:this.selectedRow==r?"selected":"",onClick:t=>this.selectRow(t)},a)})}render(){const e=this.generateHeader(),r=this.generateGrid();return t("table",null,t("slot",{name:"above"}),e,r,t("slot",{name:"below"}))}static get is(){return"mi-table"}static get encapsulation(){return"shadow"}static get properties(){return{data:{type:"Any",attr:"data"},headings:{type:"Any",attr:"headings"},ref:{type:"Any",attr:"ref"},rowOnClick:{type:"Any",attr:"row-on-click"},selectedRow:{state:!0}}}static get style(){return"table{width:100%}table,td,th{border:1px solid #000;border-collapse:collapse}td,th{padding:15px}table tr:nth-child(even){background-color:#eee}table tr:nth-child(odd){background-color:#fff}table th{color:#fff;background-color:#000}tr.selected{border:red 3px solid}"}}export{e as MiTable};