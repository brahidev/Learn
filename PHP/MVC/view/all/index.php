<div class="container-fluid pt-5">
    <div class="row justify-content-center">
        <div class="card" style="width: 28rem;">
            <div class="card-body">
                <h5 class="card-title">Inicio de Sesión</h5>
                <h6 class="card-subtitle mb-2 text-muted">¡ Aca podras iniciar sesión !</h6>
                <?php
                    if (isset($_REQUEST['ucfail'])) {
                        ?>
                            <div class="alert alert-danger" role="alert">
                                Usuario o contraseña incorrecto
                            </div>
                        <?php
                    } else if (isset($_REQUEST['untfail'])) {
                        ?>
                            <div class="alert alert-danger" role="alert">
                                Usuario no encontrado
                            </div>
                        <?php
                    }
                ?>
                <form action="?c=login&m=usersLogin" method="POST">
                    <div class="card-text">
                        <div class="form-group">
                            <label for="inpEmail">Correo electronico</label>
                            <input type="email" class="form-control" name="inpEmail" id="inpEmail" aria-describedby="emailHelp" placeholder="Escribe tu correo" required>
                            <small id="emailHelp" class="form-text text-muted">¡ No olvides que tu correo debe ser único !</small>
                        </div>
                        <div class="form-group">
                            <label for="inpPass">Contraseña</label>
                            <input type="password" class="form-control" id="inpPass" name="inpPass" placeholder="Contraseña" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success"> Ingresar </button>
                </form>
            </div>
        </div>
    </div>
</div>