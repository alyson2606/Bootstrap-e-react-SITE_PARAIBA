import React from 'react'

const Nav_bar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-toggler" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#ola">Sobre nós</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Bandeira</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Governo</a>
                </li>
               
            </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Nav_bar