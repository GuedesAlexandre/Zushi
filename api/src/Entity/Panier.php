<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Panier
 *
 * @ORM\Table(name="panier")
 * @ORM\Entity
 * @apiResource()
 */
class Panier
{
    /**
     * @var int
     *
     * @ORM\Column(name="panier_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $panierId;
}
