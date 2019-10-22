<div class="container pt-2">
    <div class="col-md-2 offset-md-10">
        <div id="spinner">
        </div>
    </div>
    <div class="col">
        <p class="lead text-center mb-3"> Bienvenido <?php echo $_SESSION['NAME'] ?> </p>
    </div>
    <div class="row justify-content-center">
        <div class="card" style="width: 28rem;">
            <div class="card-body">
                <h5 class="card-title">Añadir nuevo usuario</h5>
                <h6 class="card-subtitle mb-2 text-muted">! Aca podras añadir un nuevo usuario ¡</h6>
                <?php
                    if (isset($_REQUEST['success'])) {
                        ?>
                        <div class="alert alert-success" role="alert">
                            Usuario creado correctamente
                        </div>
                        <?php
                    }
                ?>
                <form id="formAddUser" action="">
                    <div class="card-text">
                        <div class="form-group">
                            <label for="inpName">Nombre</label>
                            <input type="text" class="form-control" name="inpName" id="inpName" aria-describedby="emailHelp" placeholder="Escribe tu nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="inpEmail">Correo electronico</label>
                            <input type="email" class="form-control" name="inpEmail" id="inpEmail" aria-describedby="emailHelp" placeholder="Escribe tu correo" required>
                            <small id="emailHelp" class="form-text text-muted">¡ No olvides que tu correo debe ser único !</small>
                        </div>
                        <div class="form-group">
                            <label for="inpPass">Contraseña</label>
                            <input type="password" class="form-control" id="inpPass" name="inpPass" placeholder="Contraseña" required>
                        </div>
                        <button type="submit" id="inpAddUser" class="btn btn-success"> Añadir </button>
                        <button type="button" id="inpCloseSession" class="btn btn-danger"> Cerrar sesión </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
