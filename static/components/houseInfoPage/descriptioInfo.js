
app.component('description-content', {
    template:
        /* html */
        `   
    <section id="house-desc">
        <div class="container">
            <div class="description-text">
                <h3>Description</h3>
                <p>{{description}}</p>
            </div>
            <!--  -->
            <div class="other-opt-info">
                <div class="info-btn" @mouseover="selectedBox(1)" @mouseout="unselectedBox(1)">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0237 0.117188H8.13369C8.02802 0.117188 7.92667 0.164104 7.85195 0.247616C7.77723 0.331129 7.73525 0.444396 7.73525 0.5625C7.73525 0.680604 7.77723 0.793871 7.85195 0.877384C7.92667 0.960896 8.02802 1.00781 8.13369 1.00781H10.0621L6.98619 4.44562C6.94704 4.48639 6.91564 4.53556 6.89387 4.59018C6.87209 4.64481 6.86038 4.70377 6.85944 4.76357C6.85849 4.82336 6.86833 4.88275 6.88837 4.9382C6.90841 4.99365 6.93824 5.04402 6.97607 5.0863C7.01391 5.12859 7.05898 5.16193 7.10859 5.18432C7.1582 5.20672 7.21134 5.21772 7.26484 5.21666C7.31834 5.21561 7.3711 5.20252 7.41997 5.17818C7.46885 5.15384 7.51284 5.11875 7.54931 5.075L10.6253 1.63719V3.7925C10.6253 3.9106 10.6672 4.02387 10.742 4.10738C10.8167 4.1909 10.918 4.23781 11.0237 4.23781C11.1294 4.23781 11.2307 4.1909 11.3054 4.10738C11.3801 4.02387 11.4221 3.9106 11.4221 3.7925V0.5625C11.4221 0.444396 11.3801 0.331129 11.3054 0.247616C11.2307 0.164104 11.1294 0.117188 11.0237 0.117188Z" fill="#828282"/>
                        <path d="M1.36 1.00781H3.28844C3.39411 1.00781 3.49545 0.960896 3.57018 0.877384C3.6449 0.793871 3.68687 0.680604 3.68687 0.5625C3.68687 0.444396 3.6449 0.331129 3.57018 0.247616C3.49545 0.164104 3.39411 0.117188 3.28844 0.117188H0.398438C0.292765 0.117188 0.191421 0.164104 0.1167 0.247616C0.0419781 0.331129 0 0.444396 0 0.5625V3.7925C0 3.9106 0.0419781 4.02387 0.1167 4.10738C0.191421 4.1909 0.292765 4.23781 0.398438 4.23781C0.50411 4.23781 0.605454 4.1909 0.680175 4.10738C0.754897 4.02387 0.796875 3.9106 0.796875 3.7925V1.63719L3.87281 5.075C3.90929 5.11875 3.95328 5.15384 4.00215 5.17818C4.05103 5.20252 4.10379 5.21561 4.15728 5.21666C4.21078 5.21772 4.26392 5.20672 4.31354 5.18432C4.36315 5.16193 4.40822 5.12859 4.44605 5.0863C4.48389 5.04402 4.51371 4.99365 4.53375 4.9382C4.55379 4.88275 4.56363 4.82336 4.56269 4.76357C4.56175 4.70377 4.55004 4.6448 4.52826 4.59018C4.50648 4.53556 4.47508 4.48639 4.43594 4.44562L1.36 1.00781Z" fill="#828282"/>
                        <path d="M3.87281 7.925L0.796875 11.3628V9.2075C0.796875 9.0894 0.754897 8.97613 0.680175 8.89262C0.605454 8.80911 0.50411 8.76219 0.398438 8.76219C0.292765 8.76219 0.191421 8.80911 0.1167 8.89262C0.0419781 8.97613 0 9.0894 0 9.2075V12.4375C0 12.5556 0.0419781 12.6689 0.1167 12.7524C0.191421 12.8359 0.292765 12.8828 0.398438 12.8828H3.28844C3.39411 12.8828 3.49545 12.8359 3.57018 12.7524C3.6449 12.6689 3.68687 12.5556 3.68687 12.4375C3.68687 12.3194 3.6449 12.2061 3.57018 12.1226C3.49545 12.0391 3.39411 11.9922 3.28844 11.9922H1.36L4.43594 8.55438C4.50632 8.46996 4.54463 8.35831 4.54281 8.24294C4.54099 8.12758 4.49918 8.0175 4.42617 7.93591C4.35317 7.85432 4.25469 7.80759 4.15147 7.80555C4.04824 7.80352 3.94834 7.84634 3.87281 7.925Z" fill="#828282"/>
                        <path d="M11.0233 8.76219C10.9177 8.76219 10.8163 8.80911 10.7416 8.89262C10.6669 8.97613 10.6249 9.0894 10.6249 9.2075V11.3628L7.54897 7.925C7.47344 7.84634 7.37354 7.80352 7.27031 7.80555C7.16709 7.80759 7.06861 7.85432 6.99561 7.93591C6.92261 8.0175 6.88079 8.12758 6.87897 8.24294C6.87715 8.35831 6.91546 8.46996 6.98584 8.55438L10.0618 11.9922H8.13334C8.02767 11.9922 7.92633 12.0391 7.8516 12.1226C7.77688 12.2061 7.7349 12.3194 7.7349 12.4375C7.7349 12.5556 7.77688 12.6689 7.8516 12.7524C7.92633 12.8359 8.02767 12.8828 8.13334 12.8828H11.0233C11.129 12.8828 11.2304 12.8359 11.3051 12.7524C11.3798 12.6689 11.4218 12.5556 11.4218 12.4375V9.2075C11.4218 9.0894 11.3798 8.97613 11.3051 8.89262C11.2304 8.80911 11.129 8.76219 11.0233 8.76219Z" fill="#828282"/>
                        </svg>
                    {{surface}}m2
                </div>
                <div class="info-btn" @mouseover="selectedBox(2)" @mouseout="unselectedBox(2)">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.65671 0.574493H1.88366C1.35158 0.574493 0.916016 1.03851 0.916016 1.60501V5.72692H1.88366V4.18122C1.88366 3.8979 2.10151 3.66589 2.3674 3.66589H4.30254C4.56858 3.66589 4.78629 3.8979 4.78629 4.18122V5.72692H5.75393V4.18122C5.75393 3.8979 5.97178 3.66589 6.23782 3.66589H8.17296C8.439 3.66589 8.65671 3.8979 8.65671 4.18122V5.72692H9.62435V1.60501C9.62435 1.03851 9.18879 0.574493 8.65671 0.574493Z" fill="#828282"/>
                        <path d="M11 10.3645H0V11.3949H0.916712V12.4255H1.83329V11.3949H9.16671V12.4255H10.0833V11.3949H11V10.3645Z" fill="#828282"/>
                        <path d="M10.5423 9.33371V8.30314C10.5423 7.73662 10.1295 7.27274 9.62561 7.27274H1.37569C0.871481 7.27274 0.458984 7.73662 0.458984 8.30314V9.33371H10.5423Z" fill="#828282"/>
                    </svg>
                    {{bedrooms}}
                </div>
                <div class="info-btn" @mouseover="selectedBox(3)" @mouseout="unselectedBox(3)">
                    <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.5C2 2.11929 3.11929 1 4.5 1H6V2H7V0H4.5C2.567 0 1 1.567 1 3.5V7H0V8H1V9.5C1 11.2632 2.30385 12.7219 4 12.9646V15H5V13H10V15H11V12.9646C12.6961 12.7219 14 11.2632 14 9.5V8H15V7H2V3.5Z" fill="black"/><path d="M8 4H5V3H8V4Z" fill="black"/></svg>
                    {{toilettes}}
                </div>

                <div v-for="item in otherDetails">
                    <span v-if="item[0] == 'True'">
                        <div class="info-btn" v-if="item[1] == 'air_conditioner'"><p>air conditioner</p></div>
                        <div class="info-btn" v-else-if="item[1] == 'cuisine_equipee'"><p>cuisine equipe</p></div>
                        <div class="info-btn" v-else><p>{{item[1]}}</p></div>
                    </span>
                </div>
            </div>
            <!--  -->
            <div class="table-info">
                <ul class="first-table">
                    <li>
                        <p>Category</p>
                        <p>{{category}}</p>
                    </li>
                    <li>
                        <p>City</p>
                        <p>{{city}}</p>
                    </li>
                    <li>
                        <p>Totale Surface</p>
                        <p>{{surface}}m2</p>
                    </li>
                    <li>
                        <p>Price</p>
                        <p>{{price}} MAD</p>
                    </li>
                    <li>
                        <p>Floor</p>
                        <p>{{floor}}</p>
                    </li>
                </ul>
                <ul class="first-table">
                    <li>
                        <p>Adress</p>
                        <p>{{address.substring(0,45)}}</p>
                    </li>
                    <li>
                        <p>Salon</p>
                        <p>{{salon}}</p>
                    </li>
                    <li>
                        <p>Totale Rooms</p>
                        <p>{{rooms}}</p>
                    </li>
                    <li>
                        <p>Bathroom</p>
                        <p>{{toilettes}}</p>
                    </li>
                    <li>
                        <p>Bedrooms</p>
                        <p>{{bedrooms}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    `,
    props: ["description", "surface", "bedrooms", "toilettes", "other_details", "category", "floor", "rooms", "salon", "price", "city", "address"]
    ,
    data() {
        return {
            otherDetails: this.other_details
        }
    },
    methods: {
        // Methods Goes Here
        selectedBox(num) {
            var parentBox = document.querySelector(`.info-btn:nth-child(${num})`)
            var elementsPath = document.querySelectorAll(`.info-btn:nth-child(${num}) svg  path`)

            elementsPath.forEach(function (path) {
                path.style.fill = "white"
                path.style.transition = "all 0.3s ease 0s"
            })
            parentBox.id = "selectedBox"
        },
        unselectedBox(num) {
            var parentBox = document.querySelector(`.info-btn:nth-child(${num})`)
            var elementsPath = document.querySelectorAll(`.info-btn:nth-child(${num}) svg  path`)

            elementsPath.forEach(function (path) {
                path.style.fill = "#828282"
            })
            parentBox.id = ""
        }
    }
    ,
    computed: {
        fullAddresse() {
            var res = this.city + " , " + this.address
            return res
        }
    }
})



