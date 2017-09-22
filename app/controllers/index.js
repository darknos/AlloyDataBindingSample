var col = Alloy.Collections.instance("Person");
col.add({firstName:"Ivan", lastName:"Ivanoff"});

function doClick1(e) {
	var model = Alloy.Collections.Person.at(0);
    model.transform();
    Alloy.createController("Details",{
        $model: model
    }).getView().open();

}
function doClick2(e) {
    Alloy.createController("DetailsWithChange",{
        index: 0
    }).getView().open();

}

$.index.open();
