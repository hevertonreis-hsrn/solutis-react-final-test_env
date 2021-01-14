class FlightsListElements{

    addFlightBtn = () => { return 'a[href="/fligths/routes/add"]'}
    tableElement = () => { return 'table[class="table table-striped table-bordered mt-2"]'}
    detailsBtn = () => {return 'a[href="/fligths/routes/details/"]'}
    editBtn = () => {return 'a[href="/fligths/routes/manage/"]'}
    deleteBtn = () => {return 'button[class="btn btn-danger mx-1"]'}
    pageBtn = () => {return 'ul[class="pagination"] button[class="page-link"]'}
    limitPageBtn = () => {return 'ul[class="pagination mx-5"] button[class="page-link"]'} 

}

export default FlightsListElements