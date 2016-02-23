json.extract! @barber_shop, :id, :name, :address, :number, :picture, :description, :status, :rating, :created_at, :updated_at





var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);
