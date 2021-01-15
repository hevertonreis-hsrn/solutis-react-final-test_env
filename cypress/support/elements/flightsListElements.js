class FlightsListElements{

    addFlightBtn = () => { return 'a[href="/flights/routes/add"]'}
    tableElement = () => { return 'table[class="table table-striped table-bordered mt-2"]'}
    detailsBtn = () => {return 'a[href="/flights/routes/details/'}
    editBtn = () => {return 'a[href="/flights/routes/manage/'}
    deleteBtn = () => {return '[class="btn btn-danger mx-1"]'}
    pageBtn = () => {return 'ul[class="pagination"] button[class="page-link"]'}
    limitPageBtn = () => {return 'ul[class="pagination mx-5"] button[class="page-link"]'}
    deleteCheckedBtn = () => {return 'button[class="btn btn-danger h-100 mt-4"]'}

}

export default FlightsListElements