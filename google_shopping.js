var data = require("./products.json")
var items = data["items"];
var itemcount = 0;
// Write your solutions below

//#1 code for getting number of items

for (i=0; i<items.length; i++) 
{
	if (items[i].kind =="shopping#product")
	{
		itemcount++
	}
}

console.log("there are " +itemcount+ " items");


//#2 code for the backorder

for (var j=0; j<items.length; j++)
{
	if (items[j]["product"]["inventories"][0].availability==="backorder")
	{
		console.log ("item " + j + " has a backorder");
	}
}



//#3 image links


for(var k=0; k<items.length; k++)
{
	var imgr = items[k]["product"]["images"];
	if (imgr.length>1)
	{
		console.log("item " + k + " has more than 1 image");
	}
}

//#4 Canon Brand

for (var l=0; l<items.length; l++)
{
	var brnd = items[l]["product"].brand;
	if (brnd==="Canon")
	{
		console.log("item " + l + " is Canon");
	}

}

//#5 canon + ebay

for (var m=0; m<items.length; m++)
{
	var brnd = items[m]["product"].brand;
	var ath = items[m]["product"]["author"].name;
	if (brnd==="Canon" && ath.includes("eBay"))
	{
		console.log("item " + m + " is both Canon and from eBay");
		
	}
}

//# 6 Brand Price and Image

for ( var n=0; n<items.length; n++)
{
	var brnd = items[n]["product"].brand;
	var prce = items[n]["product"]["inventories"][0].price;
	var img = items[n]["product"]["images"][0].link;
	console.log("item " + n + " is brand "+ brnd + ", is $"+ prce + ", and is linked at "+ img);
}